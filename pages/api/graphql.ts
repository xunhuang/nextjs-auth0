import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';
import { NextApiRequest, NextApiResponse } from 'next';

import postgraphile from '../../server/postgraphile';
import runMiddleware from '../../server/runMiddleware';

const checkJwt = jwt({
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

// GraphQL route that handles queries
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  await runMiddleware(req, res, checkJwt);
  await runMiddleware(req, res, postgraphile);
  res.end();
};

export const config = {
  api: {
    bodyParser: false,
  },
}
