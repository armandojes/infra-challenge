#!/usr/bin/env node
import 'source-map-support/register';

import * as cdk from 'aws-cdk-lib';
import ApplicationStack from './stack';
import Pipeline from './pipeline';

const app = new cdk.App();
new Pipeline(app, 'Pipeline');