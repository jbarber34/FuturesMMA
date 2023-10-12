import NextAuth, { NextAuthOptions } from 'next-auth';

const options: NextAuthOptions = {
  providers: [],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      if (account) {
        return {
          access_token: account.access_token,
          // @ts-ignore
          accessTokenExpires: account.expires_at * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }

      // @ts-ignore
      if (Date.now() < token.accessTokenExpires) {
        return token;
      } else {
        return {
          ...token,
          error: 'RefreshAccessTokenError',
        };
      }
    },
    async session({ session, token }) {
      // @ts-ignore
      session.user = token.user;
      // @ts-ignore
      session.accessToken = token.access_token;
      session.error = token.error;

      return session;
    },
  },
  secret: 'test',
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: any, res: any) => NextAuth(req, res, options);
