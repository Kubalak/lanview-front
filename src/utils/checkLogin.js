import { cookies } from 'next/headers'
import app from '@/utils/createAxios'

async function authenticated(){
    return await app.get('/api/users/login/', {
      cache: 'no-cache',
      headers:{
        Cookie: cookies().toString()
      }
    })
    .then(response => {
      return response.data.authenticated;
    })
    .catch(error => {
      return false;
    })
  }

  export default authenticated;