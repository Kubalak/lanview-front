"use client";
import { Select, Option, Typography, Button, Input, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction, IconButton, Tooltip } from "@material-tailwind/react"
import { useState } from "react";
import PortSelect from "./select";
import PortRange from "./range";
import { BiPlus } from "react-icons/bi";
import { FaArrowsLeftRightToLine } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

export default function Configure({config}) {

    const [network, setNetwork] = useState(config.network)
    const [mask, setMask] = useState(`${config.mask_length}`)
    const [ranges, setRanges] = useState(config.tcp_ports.range)
    const [select, setSelect] = useState(config.tcp_ports.select)

    function updatePort(id, value){
        setSelect(prevVal => [
                ...prevVal,
                [id] = value
            ]
        )

    }
    function printAll() {
        console.info(select)
        console.log(ranges)
    }

    return (
    <div className="bg-white dark:bg-gray-600 dark:text-white p-3 w-full lg:w-3/4 shadow-md lg:rounded-xl">
        <Typography variant="h4" className="text-center mb-3">Configure network {config.network}</Typography>
        <Input type="text" onChange={(e) => setNetwork(e.target.value)} value={network} label="Network"/>
        <div className="flex flex-row items-center gap-x-2 mt-2">
            <Typography className="whitespace-nowrap">Mask length:</Typography>
            <Select label="Select mask length" value={mask} onChange={e => setMask(e)} className="dark:text-white">
                <Option value="1">1 <i>(128.0.0.0)</i></Option>
                <Option value="2">2 <i>(192.0.0.0)</i></Option>
                <Option value="3">3 <i>(224.0.0.0)</i></Option>
                <Option value="4">4 <i>(240.0.0.0)</i></Option>
                <Option value="5">5 <i>(248.0.0.0)</i></Option>
                <Option value="6">6 <i>(252.0.0.0)</i></Option>
                <Option value="7">7 <i>(254.0.0.0)</i></Option>
                <Option value="8">8 <i>(255.0.0.0)</i></Option>
                <Option value="9">9 <i>(255.128.0.0)</i></Option>
                <Option value="10">10 <i>(255.192.0.0)</i></Option>
                <Option value="11">11 <i>(255.224.0.0)</i></Option>
                <Option value="12">12 <i>(255.240.0.0)</i></Option>
                <Option value="13">13 <i>(255.248.0.0)</i></Option>
                <Option value="14">14 <i>(255.252.0.0)</i></Option>
                <Option value="15">15 <i>(255.254.0.0)</i></Option>
                <Option value="16">16 <i>(255.255.0.0)</i></Option>
                <Option value="17">17 <i>(255.255.128.0)</i></Option>
                <Option value="18">18 <i>(255.255.192.0)</i></Option>
                <Option value="19">19 <i>(255.255.224.0)</i></Option>
                <Option value="20">20 <i>(255.255.240.0)</i></Option>
                <Option value="21">21 <i>(255.255.248.0)</i></Option>
                <Option value="22">22 <i>(255.255.252.0)</i></Option>
                <Option value="23">23 <i>(255.255.254.0)</i></Option>
                <Option value="24">24 <i>(255.255.255.0)</i></Option>
                <Option value="25">25 <i>(255.255.255.128)</i></Option>
                <Option value="26">26 <i>(255.255.255.192)</i></Option>
                <Option value="27">27 <i>(255.255.255.224)</i></Option>
                <Option value="28">28 <i>(255.255.255.240)</i></Option>
                <Option value="29">29 <i>(255.255.255.248)</i></Option>
                <Option value="30">30 <i>(255.255.255.252)</i></Option>
            </Select>
        </div>
        <Typography variant="h5" className="text-center mt-2 mb-2">TCP ports</Typography>
        <div className="grid grid-flow-row grid-cols-2 lg:grid-cols-4 gap-2 mb-2 items-center">
            {select && select.map((item, index) => <PortSelect port={item} key={index} updatePort={updatePort}/>)}
            {ranges && ranges.map((item, index) => <PortRange range={item} key={index}/>)}
            
            <SpeedDial placement="right">
            <SpeedDialHandler>
                <IconButton className="rounded-full">
                    <BiPlus className="h-5 w-5 transition-transform group-hover:rotate-45"/>
                </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent className="flex flex-row">
                <Tooltip className="bg-gray-400 text-black dark:text-white dark:bg-gray-900" content="Ports range">
                <SpeedDialAction className="dark:bg-gray-800" onClick={(e) => setRanges(prevVal => [...prevVal, [22, 1024]])}>
                    <FaArrowsLeftRightToLine className="w-5 h-5"/>
                </SpeedDialAction>
                </Tooltip>
                <Tooltip className="bg-gray-400 text-black dark:text-white dark:bg-gray-900" content="Single port">
                <SpeedDialAction className="dark:bg-gray-800" onClick={(e) => setSelect(prevVal => [...prevVal, 22])}>
                        <GoDotFill className="w-5 h-5"/>
                </SpeedDialAction>
                </Tooltip>
            </SpeedDialContent>
        </SpeedDial>
        </div>      
          
        <Button className="mt-2 w-full" onClick={(e) => printAll()}>Save</Button>
    </div>
    )
}
