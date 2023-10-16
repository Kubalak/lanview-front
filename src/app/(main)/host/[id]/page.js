import { cookies } from "next/headers";
import HostBody from "@/components/host/body";
import app from "@/utils/createAxios";

export const metadata = {
    title: 'View host',
    description: 'View host details'
};

export default async function Details({params}){

    const data = await  app.get(`/api/scanner/hosts/${params.id}/`,{
      headers:{
          Cookie: cookies().toString()
        }
      })
      .then(response => {
          return response.data
      })
      .then(data => {
          return data.host;
      })
      .catch(error => {
          console.warn(error);
          return null;
      })
  if (data === null)
      return(
          <div>Request has failed</div>
  )
    return(
        <>
            <HostBody host={data}/>
        </>
    )
}