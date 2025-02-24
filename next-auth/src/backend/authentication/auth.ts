import {getServerSession, type DefaultSession, type NextAuthOptions} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import {LoginHandler} from "../user/LoginHandler";
import {userRepositoryMemory} from "../user/UserRepositoryMemory";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: User;
    }
}
export type User = {
    id: string
} & DefaultSession["user"];

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    callbacks: {
        session: ({session, token}) => {
            debugger;
            return{
                ...session,
                user: {
                    ...session.user,
                    id: token.sub,
                },
            };
        },
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        Credentials({
            credentials: {
                email: {label: "Email", type: "Email"},
                password: {label: "password", type: "password"},
            },
            authorize(credentials){
                try {
                    debugger;
                    if (!credentials?.email || !credentials.password){
                        return null;
                    }
                    const userRepo = new userRepositoryMemory();
                    const handler = new LoginHandler(userRepo);

                    const user = handler.execute(credentials);
                    if(!user) return null;
                    return {
                        id: user.id,
                        email: user.email,
                        name: user.name,
                    };
                } catch{
                    return null;
                }
            },
        }),
    ],
};
export const getServerAuthSession = () => getServerSession(authOptions);