// ファイルパス: utils/cookies.ts
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export function setCodeVerifierCookie(
  res: NextApiResponse,
  codeVerifier: string
) {
  const cookie = serialize('code_verifier', codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
  res.setHeader('Set-Cookie', cookie);
}
