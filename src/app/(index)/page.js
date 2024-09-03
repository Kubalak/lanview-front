import Host from "@/components/host";
import app from "@/utils/createAxios";
import { cookies } from "next/headers";
import ScanTooltip from "@/components/scantooltip";

export const metadata = {
  title: "Dashboard",
  description: "Default landing page"
};

async function getData(){
  var result = await app.get('/api/scanner/list/',{
    headers:{
      Cookie: cookies().toString()
    }
  }
  )
  .then(response => {
    return response.data.data;
  })
  .catch(error => {
    console.warn(error)
    return null;
  })
  return result;
}

export default async function Dashboard(){
  const data = await getData();
    
  if (data!= null)
    return(
        <div className="flex min-w-full items-center flex-col gap-y-2">
          <div className="flex flex-row gap-x-2">Hosts in network <ScanTooltip/></div>
          {data.map(item => <Host data={item} key={item.pk}/>)}
        </div>
    )
  return(
    <div className="flex min-w-full">
      Request has failed!
    </div>
  )

}