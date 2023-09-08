const { CognitoJwtVerifier } = require('aws-jwt-verify');
// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
    userPoolId: "<userPoolId>",
    tokenUse: "access",
    clientId: "<clientId>",
});

module.exports = verifier;