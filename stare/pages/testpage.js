"use client";
import { useState, useEffect } from "react";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import app from "@/utils/createAxios";

export default function TestPage(){
    const [data, setData] = useState(null);
    useEffect(() => {
        app.get(`/api/scanner/hosts/1/`)
        .then(response => {
            return response.data
        })
        .then(data => {
            console.log(data)
            setData(data)
        })
        .catch(error => {
            console.warn(error);
        })
    }, [])
    if(data === null)
        return(
            <div>Loading</div>
    )
    return(
        <Card>
            <CardHeader>
               <Typography variant="h1">{data.host.name}</Typography>
            </CardHeader>
            <CardBody>
                <Typography variant="h5">
                    This is body.
                </Typography>
            </CardBody>
        </Card>
    )
}