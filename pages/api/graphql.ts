import { NextApiRequest, NextApiResponse } from 'next';

import postgraphile from '../../server/postgraphile';
import runMiddleware from '../../server/runMiddleware';
import { checkJwt } from './checkJwt';

// GraphQL route that handles queries
export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
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
