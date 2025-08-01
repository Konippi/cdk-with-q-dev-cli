#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWithQDevCliStack } from '../lib/cdk-with-q-dev-cli-stack';

const app = new cdk.App();
new CdkWithQDevCliStack(app, 'CdkWithQDevCliStack', {});