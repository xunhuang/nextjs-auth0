import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://dev-4q8dshdr.us.auth0.com/.well-known/jwks.json`,
  }),
  audience: "ablslsdhwheshss",
  issuer: `https://dev-4q8dshdr.us.auth0.com/`,
  algorithms: ["RS256"],
});
