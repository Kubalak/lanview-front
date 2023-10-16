"use client"
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useState } from "react";
import app from "@/utils/createAxios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const router = useRouter();
    const submitHandler = (e) => {
        e.preventDefault();
        var form = new FormData();
        var token = Cookies.get('csrftoken')
        form.append('username', username);
        form.append('password', password)
        form.append('csrfmiddlewaretoken', token)
        app.post("/api/users/login/",form, {
            headers:{
                'Content-Type': 'multipart/form-data',
                'X-CSRFToken': token
            }
        })
        .then(response => {
            router.push('/')
        })
        .catch(error => {
            console.warn(error)
        })
        
    }
    return(
        <Card color="white" className="p-4 self-center">
            <Typography variant="h4" color="blue-gray">Login to site</Typography>
            <form className="mt-8 mb-2 w-80 space-y-4 max-w-screen-lg sm:w-96" onSubmit={submitHandler}>
                <Input size="lg" type="text" name="username" label="Username" onChange={(e)=> setUsername(e.target.value)}/>
                <Input type="password" name="password" label="Password" onChange={(e) => setPassword(e.target.value)}/>
                <Button className="mt-6" type="submit" fullWidth>Login</Button>
            </form>
        </Card>
    )
}