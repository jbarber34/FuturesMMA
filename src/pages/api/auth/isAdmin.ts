// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';
var jwt = require('jsonwebtoken');

const secret = 'test';
const adminRole = 'Test';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const session = await getSession({ req });
  if (session) {
    const token: any = await getToken({ req, secret, raw: false });
    const decode = jwt.decode(token.access_token);
    const isAdmin = decode.roles.some((role: string) => role === adminRole);
    res.status(200).json({ isAdmin });
  }
}
