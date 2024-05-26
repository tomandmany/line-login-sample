// ファイルパス: utils/pkce.ts
import crypto from 'crypto';

export function generateCodeVerifier(): string {
  return crypto.randomBytes(43).toString('hex');
}

export function generateCodeChallenge(codeVerifier: string): string {
  return crypto.createHash('sha256').update(codeVerifier).digest('base64url');
}
