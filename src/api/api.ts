import axios from "axios";
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY': '0d75c48f-9e63-470b-9ad9-a9bece9db405'
    }
})

 export  const getUsers=(currentPage: number, pageSize:number)=>{
    return   instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response =>{
            return response.data
        })
}
