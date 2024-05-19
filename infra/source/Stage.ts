import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import Stack from './stack';

class Stage extends cdk.Stage {
  constructor(scope: Construct, id: string, props: cdk.StageProps) {
    super(scope, id, props);
    new Stack(this, 'MyStack', {});
  }
}

export default Stage;
