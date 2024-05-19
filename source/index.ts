import { LambdaFunctionURLHandler } from 'aws-lambda';

export const handler: LambdaFunctionURLHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World! updated',
    }),
  }
};
