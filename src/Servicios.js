
//direcion url de la api 

const api ='http://localhost:62731/api/';

// funcion para POST
export async function postData(url = '', data = {}) {
    const response = await fetch(api+url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
         
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) 
      });
      return response.json(); 
}

// funcion para PUT
export async function putData(url = '',id='', data = {}) {
    const response = await fetch(api+url+id, {
        method: 'PUT', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
         
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) 
      });
      return response.json(); 
}


// funcion para GET
export async function getData(url = '') {
    const response = await fetch(api+url, {
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',          
         
      });
      return response.json(); 
    }

// funcion para GET /:id
 export async function getFilter(url = '',id='') {
        const response = await fetch(api+url+id, {
            method: 'GET', 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin',          
             
          });
          return response.json(); 
}


// funcion para DELETE

export async function deleteData(url = '',id='') {
    const response = await fetch(api+url+id, {
        method: 'DELETE', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin',          
         
      });
      return response.json(); 
}

