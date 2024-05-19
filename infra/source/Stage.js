"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const stack_1 = require("./stack");
class Stage extends cdk.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        new stack_1.default(this, 'MyStack', {});
    }
}
exports.default = Stage;