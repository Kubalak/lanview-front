"use client";
import { Typography } from "@material-tailwind/react";
export default function HostHeader({name}){
    return(
        <div className="border-b">
            <Typography variant="h4" className="text-center">{name}</Typography>
        </div>
    )
}