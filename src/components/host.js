"use client"
import { useEffect, useState } from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import Link from "next/link";
import app from "@/utils/createAxios";
import {MdHttp, MdHttps} from 'react-icons/md';
import {VscRemote,VscRemoteExplorer} from 'react-icons/vsc';
import {AiOutlineMail} from 'react-icons/ai';
import {FiServer,FiDatabase} from 'react-icons/fi';

const portToIcon = {
    22: <VscRemote className="w-5 h-5"/>,
    25: <AiOutlineMail className="w-5 h-5"/>,
    20: <FiServer className="w-5 h-5"/>,
    80: <MdHttp className="w-5 h-5"/>,
    443: <MdHttps className="w-5 h-5"/>,
    3389: <VscRemoteExplorer className="w-5 h-5"/>,
    3306: <FiDatabase className="w-5 h-5"/>
}

export default function Host({ data }) {
    const [online, setIsOnline] = useState(null);
    const [date, setDate] = useState(new Date(data.last_seen))
    useEffect(()  => {
        console.log(`UseEffect for ${data.pk}`)
        app.get(`/api/scanner/online/${data.pk}/`)
            .then(response => {
                return response.data
            })
            .then(data => {
                setIsOnline(data.online);
            })
            .catch(error => {
                setIsOnline('failed');
            })
        
    }, [data])
    

    return (
        <>
            <Card className={`mb-1 lg:mb-3 lg:w-2/5 w-full rounded-none overflow-x-auto lg:rounded-xl ${online === null ? 'loader' : online === true ? 'bg-green-200 dark:bg-green-800' : online === false ? 'bg-red-200 dark:bg-red-800' : 'bg-gray-300 dark:bg-gray-600'}`}>
                <Link href={`/host/${data.pk}`}>
                    <CardBody className="dark:text-white">
                        <div className="flex flex-row">
                            <div className="w-1/2">
                                <Typography variant="h5" className="whitespace-pre">{data.name}</Typography>
                                <div>
                                    {data.ip_address}
                                </div>
                            </div>
                            <div className="w-1/4 h-full flex-col justify-between">
                                <div className="whitespace-nowrap"><strong>Last seen:&nbsp;</strong>{date.toLocaleDateString()}&nbsp;{date.toLocaleTimeString()}</div>
                                <div className="flex flex-row gap-x-1">
                                    TCP: {data.service_list.tcp && data.service_list.tcp.map(item => <div key={item}>{portToIcon[item]}</div>)}
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Link>
            </Card>
            
        </>
    )
}