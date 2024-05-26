// auth.ts

import { url } from 'inspector';
import NextAuth from 'next-auth';
import { NextAuthConfig } from 'next-auth';
import LINEProvider from 'next-auth/providers/line';

export const config: NextAuthConfig = {
  providers: [
    LINEProvider({
      clientId: process.env.LINE_CLIENT_ID!,
      clientSecret: process.env.LINE_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'profile openid email',
          response_type: 'code',
          state: 'some_random_string', // ここで適切なstateを設定
        },
        url: 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=CLIENT_ID&redirect_uri=REDIRECT_URI&state=STATE&scope=profile%20openid%20email&nonce=NONCE',
      },
    }),
  ],
  basePath: '/api/auth',
  callbacks: {
    async signIn({ user, account, profile }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      // 認証後のリダイレクト先を設定
      return baseUrl;
    },
    async session({ session, token }) {
      session.user.id = token.sub!;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
