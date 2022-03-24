import { NextApiRequest, NextApiResponse } from 'next';

import postgraphile from '../../server/postgraphile';
import runMiddleware from '../../server/runMiddleware';

// Graphiql route that handles rendering graphiql
// https://github.com/graphql/graphiql
// An interactive in-browser GraphQL IDE
export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  console.log(req.url);
  await runMiddleware(req, res, postgraphile);
  res.end();
};
