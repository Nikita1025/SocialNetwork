import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0d75c48f-9e63-470b-9ad9-a9bece9db405'
    }
})
export const userAPI = {
    getUsers (currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number){
        return  instance.post(`follow/${userId}`)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    header(){
        return   instance.get(`auth/me`)
    },
    profile(userId: number){
        return  profileAPI.profile(userId)
    }

}

export const profileAPI ={
    profile(userId: number){
        return  instance.get(`profile/` + userId)
    },
    getStatus(userId: number){
        return  instance.get(`profile/status/` + userId)
    },
    updateStatus(status: string){
        return  instance.put(`profile/status`,{status: status})
    }

}
export const loginAPI={
    loginPost(email:string, password:string){
        return instance.post(`auth/login`)
    }
}

