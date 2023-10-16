import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginForm from "@/components/loginForm";
import authenticated from "@/utils/checkLogin";

export const metadata = {
  title: 'Login',
  description: 'Login to LanView app',
}

export default async function Login() {
    const login = await authenticated();
    if(login)
        redirect('/');

    return(
        <>
          <LoginForm/>
        </>
    )
}