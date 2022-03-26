import { NextAuthenticatedApiRequest } from '@serverless-jwt/next/dist/types';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import runMiddleware from '../../../server/runMiddleware';
import { checkJwt } from '../checkJwt';

const requireScope = (scope: string, apiRoute: NextApiHandler) =>
  async (req: NextAuthenticatedApiRequest, res) => {
    await runMiddleware(req, res, checkJwt);
    if (!req["user"].permissions.includes(scope)) {
      return res.status(403).json({
        error: 'access_denied',
        error_description: `Token does not contain the required '${scope}' scope`
      });
    }
    return apiRoute(req, res);
  };

const apiRoute = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  try {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=identity');
    const shows = await response.json();

    res.status(200).json({ shows });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
};

export default requireScope('read:shows', apiRoute);