import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export const login = (email,password)=>{
    return axios
    .post(`${BASE_URL}/login`,{email,password})
    .then((res)=>res.data)
}

export const fetchProducts =(token)=>{
    return axios
    .get(`${BASE_URL}/all-products`,{
        headers:{
            authorization:token
        }
    })
    .then((res)=>res.data)
}

export const addProduct=(token, name,price,description,imgUrl)=>{
    return axios
    .post(`${BASE_URL}/add-product`,
    {name,price,description,imgUrl},
    {
        headers:{
            authorization:token
        }
    }
    )
    .then((res)=>res.data)
}