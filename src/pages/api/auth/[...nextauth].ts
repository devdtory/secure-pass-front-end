import { getCookie } from "@/utils/api/services/authService";
import { URLConstants } from "@/utils/constants/urls";
import NextAuth, { AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      credentials: {
        login_id: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        console.log({ credentials });
        const res = await fetch(URLConstants.login(), {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login_id: credentials?.login_id,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        const setCookieHeader = res.headers.get("set-cookie");
        if (setCookieHeader) {
         
          const accessToken = setCookieHeader.split(";")[0].split("=")[1];
          const refreshToken = setCookieHeader.split(";")[3].split(",")[1].split("=")[1];

          user.accessToken = accessToken;
          user.refreshToken = refreshToken;
        }
        console.log({ user });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      console.log({ account });

      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token as any;

      return session;
    },
  },
};
export default NextAuth(authOptions);
