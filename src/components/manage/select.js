"use client";
import { Input } from "@material-tailwind/react";

export default function PortSelect({port, id, updatePort}) {
    return(
        <div className="bg-gray-200 col-span-1 p-3 rounded-lg shadow-md dark:bg-gray-800">
            <Input variant="standard" type="text" label="Port" className="w-1/3 dark:text-white" value={port} onChange={(e) => updatePort(id, e.target.value)}/>
        </div>
    )
}