import * as CDK from "aws-cdk-lib"
import * as LambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as APIGateway from "aws-cdk-lib/aws-apigateway"
import * as CWLogs from "aws-cdk-lib/aws-logs"
import { Construct } from "constructs"

interface ECommerceApiStackProps extends CDK.StackProps {
    productsFetchHandler: LambdaNodeJS.NodejsFunction
}

export class ECommerceApiStack extends CDK.Stack {
    constructor(scope: Construct, id: string, props: ECommerceApiStackProps) {
        super(scope, id, props)

        const logGroup = new CWLogs.LogGroup(this, "ECommerceApiLogs")
        const api = new APIGateway.RestApi(
            this, 
            "ECommerceApi", 
            {
                restApiName: "ECommerceApi",
                // cloudWatchRole: true,
                deployOptions: {
                    accessLogDestination: new APIGateway.LogGroupLogDestination(logGroup),
                    accessLogFormat: APIGateway.AccessLogFormat.jsonWithStandardFields({
                        httpMethod: true,
                        ip: true,
                        protocol: true,
                        requestTime: true,
                        resourcePath: true,
                        responseLength: true,
                        status: true,
                        caller: true,
                        user: true
                    })
                }
            }
        )

        const productsFetchIntegration = new APIGateway.LambdaIntegration(props.productsFetchHandler)
        const productsResource = api.root.addResource("products")
        productsResource.addMethod("GET", productsFetchIntegration)
    }
}