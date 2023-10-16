"use client";
import app from "@/utils/createAxios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Logout(){
    const [logoutFailed, setLogoutFailed] = useState(false);
    const router = useRouter();

    useEffect(() =>{
        var token = Cookies.get('csrftoken')
        var form = new FormData();
        form.append('csrfmiddlewaretoken', token)
        app.post("/api/users/logout/", form , {
            headers:{
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': token
            }
        })
        .then(res => {
            if(res.status == 207)
                router.push("/login")
            else 
                setLogoutFailed(true)
        })
        .catch(error => {
            console.log(error)
            setLogoutFailed(true)
        })
    }, [router])

    if(!logoutFailed)
        return(
            <>Logging out</>
    )
    return(
        <>Logout failed</>
    )
}