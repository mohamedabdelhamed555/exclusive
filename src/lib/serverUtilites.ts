"use server"
import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getToken() {
    const cookiesStore = await cookies();
    const encodedToken = cookiesStore.get("next-auth.session-token")?.value || cookiesStore.get("__Secure-next-auth.session-token")?.value;


    const decodedToken =await decode({token : encodedToken , secret : process.env.AUTH_SECRET!});    
    

    return decodedToken!.token;
}