import * as cdk from 'aws-cdk-lib';
import { AttributeType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class CdkWithQDevCliStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const itemTable = new Table(this, "ItemTable", {
      partitionKey: {
       name: "pk",
       type: AttributeType.STRING,
     },
     removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const func = new NodejsFunction(this, "Function", {
      entry: "lib/hello-world.ts",
      runtime: Runtime.NODEJS_18_X,
      environment: {
       ITEM_TABLE_NAME: itemTable.tableName,
      },
    });

    itemTable.grantReadData(func);
  }
}
