import { getAccessToken } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const apiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const token = await getAccessToken(req, res);
    // const response = await fetch('https://api.tvmaze.com/search/shows?q=identity');
    // const shows = await response.json();
    // res.status(200).json({ shows });
    res.status(200).json(token);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
};

export default apiRoute;
