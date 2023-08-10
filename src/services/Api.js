import ApiCodes from './ApiCodes'
import ApiInstance from './ApiInstance'
const handleResponse=(url,response,resolve,reject)=>{
if(response.data.code !==ApiCodes.TOKEN_EXPIRED){
  resolve(response);
}
}
const  addToken=async()=>{
  ApiInstance.defaults.headers.common['Authorization']="";
}
const handlError=(reject,error)=>{
reject(error)
}

export default{
 async get(url,request,authToken,header){
  if(!header){
    await addToken();
  }
  return new Promise((resolve,reject)=>{
    ApiInstance.get(url,request).then((response)=>{handleResponse(url,response,resolve,reject)}).catch((error)=>{handlError(reject,error)})
  })
 },
 async post(url,request,authToken,header){
  if(!header){
    await addToken();
  }
  return new Promise((resolve,reject)=>{
    ApiInstance.post(url,request).then((response)=>{handleResponse(url,response,resolve,reject)}).catch((error)=>{handlError(reject,error)})
  })
 },
 async put(url,request,authToken,header){
  if(!header){
    await addToken();
  }
  return new Promise((resolve,reject)=>{
    ApiInstance.put(url,request).then((response)=>{handleResponse(url,response,resolve,reject)}).catch((error)=>{handlError(reject,error)})
  })
 },
 async put(url,request,authToken,header){
  if(!header){
    await addToken();
  }
  return new Promise((resolve,reject)=>{
    ApiInstance.put(url,request).then((response)=>{handleResponse(url,response,resolve,reject)}).catch((error)=>{handlError(reject,error)})
  })
 },
}
