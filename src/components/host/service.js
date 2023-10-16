"use client"
import { Card, Tooltip } from "@material-tailwind/react"
import { useState } from "react"

export default function Service({service}){
    const [show, setShow] = useState(false);

    return(
        <Tooltip content={
            <div>{service.product}</div>
        } open={show} className="basis-1">
            <Card className="p-2 dark:text-white bg-gray-200 dark:bg-gray-700 text-center" onClick={() => setShow((prev) => !prev)} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {service.port}
            </Card>
        </Tooltip>
    )
}