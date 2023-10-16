"use client";
import { Tooltip, Typography } from "@material-tailwind/react"
import { AiOutlineInfoCircle } from "react-icons/ai"
import { useState } from "react";
export default function ScanTooltip(){
    const [showTip, setShowTip] = useState(false);

    return(
        <Tooltip className="bg-white text-black dark:bg-blue-gray-800 dark:text-white" placement="bottom" content={
            <div className="w-80 lg:w-96">
                <Typography className="font-medium border-b">
                    Info - background color meaning
                </Typography>
                <div className="flex flex-col gap-y-1 pt-1">
                    <div className="flex flex-row">
                        <div className="w-5 h-5 rounded-full loader"></div>&nbsp;- Checking if host is online.
                    </div>
                    <div className="flex flex-row">
                        <div className="w-5 h-5 rounded-full bg-green-200"></div>&nbsp;- Host is online.
                    </div>
                    <div className="flex flex-row">
                        <div className="w-5 h-5 rounded-full bg-red-200"></div>&nbsp;- Host is offline.
                    </div>
                    <div className="flex flex-row">
                        <div className="w-5 h-5 rounded-full bg-gray-300"></div>&nbsp;- Host state is unknown (host state checking timed out).
                    </div>
                </div>
            </div>
        } open={showTip}>
        <div className="cursor-pointer w-5 h-5" onClick={() => setShowTip((prevState) => !prevState)} onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
            <AiOutlineInfoCircle className="w-5 h-5"/>
        </div>
</Tooltip>
    )
}