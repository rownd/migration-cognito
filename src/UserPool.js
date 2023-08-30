import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: '***REMOVED***',
    ClientId: '***REMOVED***'
};

export default new CognitoUserPool(poolData);