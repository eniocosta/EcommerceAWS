import * as lambda from "aws-cdk-lib/aws-lambda"
import * as LambdaNodeJS from "aws-cdk-lib/aws-lambda-nodejs"
import * as CDK from "aws-cdk-lib"
import { Construct } from "constructs"

export class ProductsAppStack extends CDK.Stack {
    readonly productsFetchHandler: LambdaNodeJS.NodejsFunction
    
    constructor(scope: Construct, id: string, props?: CDK.StackProps) {
        super(scope, id, props)

        this.productsFetchHandler = new LambdaNodeJS.NodejsFunction(
            this, 
            "ProductsFetchFunction",
            {
                functionName: "ProductsFetchFunction",
                entry: "lambda/products/productsFetchFunction.ts",
                handler: "handler",
                memorySize: 128,
                timeout: CDK.Duration.seconds(5),
                bundling: {
                    minify: true,
                    sourceMap: false
                }
            }
        )
    }
}