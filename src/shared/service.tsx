export const getRequest = (url : string) =>{
    return fetch(url,{
     headers : { 
       'Content-Type': 'application/json',
      }
   }).then(res => res.json())
 }
 
 export const postRequest = (url : string,data : object) =>{
     return fetch(url,{
         method : 'POST',
         headers : {
             'Content-Type' : 'application/json'
         },
         body : JSON.stringify(data)
     }).then(res=>res.json());    
 }

 export const putRequest = (url : string, data : object) => {
    return fetch(url,{
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
    }).then(res=>res.json());
 }

 export const deleteRequest = (url : string) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
    
 }