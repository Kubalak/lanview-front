"use client"
import { Card,CardHeader, CardBody, Typography } from "@material-tailwind/react"
import HostHeader from "./header"
import Service from "./service";

export default function HostBody({host}){
   
    console.info(host.tcp)
    const date = new Date(host.last_seen);

    return(
        <Card className="w-full rounded-none lg:rounded-xl lg:w-9/12 dark:text-white dark:bg-gray-800">
            <CardBody className="w-full items-center">
                <HostHeader name={host.name}/>
                <Typography className="text-lg lg:text-2xl text-center">
                    Host details:
                </Typography>
                <div className="flex flex-col w-full shadow-md rounded p-2 bg-blue-gray-100 dark:bg-blue-gray-800">
                    <div>IPv4 address: <label className="font-bold">{host.ip_address}</label></div>
                    <div>MAC address: <label className="font-bold">{host.mac_address}</label></div>
                    <div>Vendor: <label className="font-bold">{host.vendor}</label></div>
                    <div>Last seen: <label className="font-bold">{date.toLocaleDateString()} {date.toLocaleTimeString()}</label></div>
                    <Typography className="text-md lg:text-xl text-center">
                        UDP services:
                        </Typography>
                    <div className="text-center mb-2">
                        {host.udp && host.udp.map(item=> <Service key={item.port} service={item}/>)}
                       
                    </div>
                    <Typography className="text-md pr-2 lg:text-xl text-center">
                        TCP services:
                        </Typography>
                    <div className="grid grid-cols-5 pt-2 lg:grid-cols-10 gap-2">
                        
                        {host.tcp && host.tcp.map(item=> <Service key={item.port} service={item}/>)}
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

