import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const ddbClient = new DynamoDBClient({});

const listItems = async (tableName: string) => {
  const command = new ScanCommand({
    TableName: tableName,
  });
  return (await ddbClient.send(command)).Items;
};

export const handler = async () => {
  const itemTableName = process.env.ITEM_TABLE_NAME!;
  return await listItems(itemTableName);
};