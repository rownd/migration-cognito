import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: 'us-east-2_0M1YJ9GWD',
    ClientId: '53as9maq1iaoijf440ogibei3v'
};

export default new CognitoUserPool(poolData);