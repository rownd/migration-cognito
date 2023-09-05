const { CognitoJwtVerifier } = require('aws-jwt-verify');
// Verifier that expects valid access tokens:
const verifier = CognitoJwtVerifier.create({
    userPoolId: "***REMOVED***",
    tokenUse: "access",
    clientId: "***REMOVED***",
});

module.exports = verifier;