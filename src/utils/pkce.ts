// ファイルパス: utils/pkce.ts
import crypto from 'crypto';

export function generateCodeVerifier(): string {
  const codeVerifier = crypto.randomBytes(32).toString('hex');
  return codeVerifier;
}

export function generateCodeChallenge(codeVerifier: string): string {
  const hash = crypto
    .createHash('sha256')
    .update(codeVerifier)
    .digest('base64');
  return hash.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
