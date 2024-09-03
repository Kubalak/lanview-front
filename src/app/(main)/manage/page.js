import app from "@/utils/createAxios";
import { cookies } from "next/headers";
import Configure from "@/components/manage/body";

export default async function Manage() {
    const data = await app.get('/api/scanner/config/', {
        headers:{
            Cookie: cookies().toString()
        }
    }).then(response => {
        return response.data
    })
    .catch(error => {
        console.warn(error)
        return null
    })
    console.log(data.config.tcp_ports)
    if(data === null)
    return(
        <div>
            Request has failed!
        </div>
    )
    return(
        <>
            <Configure config={data.config}/>
        </>
    )

}