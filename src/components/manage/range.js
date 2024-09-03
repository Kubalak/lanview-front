"use client";
import { Card, Input } from "@material-tailwind/react";
import { useState } from "react";

export default function PortRange({range}) {
    const [low, setLow] = useState(range[0]);
    const [high, setHigh] = useState(range[1]);
    return(
        <div className="flex flex-row gap-x-2 bg-gray-200 col-span-2 p-3 rounded-lg shadow-md dark:bg-gray-800">
            <Input variant="standard" type="text" label="Low" className="w-1/3 dark:text-white" value={low} onChange={(e) => setLow(e.target.value)}/>
            <Input variant="standard" type="text" label="High" className="w-1/3 dark:text-white" value={high} onChange={(e) => setHigh(e.target.value)}/>
        </div>
    )
}