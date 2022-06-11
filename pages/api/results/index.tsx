import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

// POST /api/results
// Required fields in body: prompt
// Required fields in body: snippet
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { prompt, snippet } = req.body;

  const session = await getSession({ req });
  if (session) {
    const result = await prisma.result.create({
      data: {
        prompt: prompt,
        snippet: snippet,
        user: { connect: { email: session.user?.email } },
      },
    });
    res.json(result);
  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
}
