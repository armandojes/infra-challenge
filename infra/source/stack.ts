import * as cdk from 'aws-cdk-lib';
import * as Lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

class Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambda = new Lambda.Function(this, 'helloWorldFunction', {
      runtime: Lambda.Runtime.NODEJS_20_X,
      code: Lambda.Code.fromAsset('dist'),
      handler: 'bundle.handler',
      functionName: 'helloWorldFunction',
    });

    lambda.addFunctionUrl({
      authType: Lambda.FunctionUrlAuthType.NONE,
      cors: { allowedOrigins: ['*'] },
    });
  }
}

export default Stack;