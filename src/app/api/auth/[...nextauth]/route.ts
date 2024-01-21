import NextAuth from "next-auth/next";
import options from "./options";

const handler = NextAuth(options);


export {handler as Get, handler as Post}