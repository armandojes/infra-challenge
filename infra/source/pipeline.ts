import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CodeBuildStep, CodePipeline, CodePipelineSource } from 'aws-cdk-lib/pipelines';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import Stage from './Stage';

class Pipeline extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    /**
     * create a bucket to store the artifacts
     * this bucket will be used by the pipeline
     */
    const artifactsBucket = new Bucket(this, 'armando-artifacts', {
      bucketName: 'armando-artifacts',
      removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'firstPipeline',
      synth: new CodeBuildStep('CompileInfraAndCode', {
        input: CodePipelineSource.gitHub('armandojes/infra-challenge', 'master'),
        commands: ['cd ../', 'npm install', 'npm run build', 'cd infra', 'npm ci', 'npx cdk synth'],
      }),
      artifactBucket: artifactsBucket,
    });

    pipeline.addStage(new Stage(this, 'MyStage', {}));
  }
}

export default Pipeline