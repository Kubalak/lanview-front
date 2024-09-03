"use client"
import { Card, Tooltip } from "@material-tailwind/react"
import { useState } from "react"

export default function Service({service}){
    const [show, setShow] = useState(false);

    return(
        <Tooltip content={
            <div className="flex flex-col gap-y-1 text-center">
                <div className="border-b text-md">{service.product}</div>
                <div className="text-left">
                    <div>State: <label className="font-bold">{service.state}</label></div>
                    <div>Name: <label className="font-bold">{service.name}</label></div>
                    <div>Product: <label className="font-bold">{service.product}</label></div>
                    <div>Version: <label className="font-bold">{service.version}</label></div>
                    <div>Additional info: <label className="font-bold">{service.extra}</label></div>
                </div>
            </div>
        } open={show} className="basis-1 bg-gray-300 text-gray-700 dark:bg-gray-600 dark:text-white w-72 lg:w-80">
            <Card className="p-2 dark:text-white bg-gray-200 dark:bg-gray-700 text-center" onClick={() => setShow((prev) => !prev)} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
                {service.port}
            </Card>
        </Tooltip>
    )
}