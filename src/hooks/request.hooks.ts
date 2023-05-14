import api from "../services/axios"
import iUserToken from "../interfaces/interfaces"

export const useRequests = () => {
    const registerUserRequest = async (payload: any) => {
        try {
            const response = await api.post('/users', payload)
            return response
        } catch (error) {
            console.log(error)
        } 
    }
    const loginUserRequest = async (payload: any) => {
        try {
            const response = await api.post('/login', payload)
            console.log(response)
            console.log(response)
            const user: iUserToken = {
                uid: response.data.uid,
                name: response.data.displayName,
                photoURL: response.data.photoURL
            }
            localStorage.setItem('task-manager:token', response.data.stsTokenManager.refreshToken)
            localStorage.setItem('task-manager:user', JSON.stringify(user))
            return response
        } catch (error) {
            console.log(error)
        }
    }

    const getCurrentUserRequest = () => {
        try {
            const getUser: any = localStorage.getItem('task-manager:user')
            const user = JSON.parse(getUser);
            return user
        } catch (error) {
            console.log(error)
        }
    }
    const getFullTaskListRequest = async () => {
        try {
            const response = await api.get('/tasks')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }

    const getCardUsername = async () => {
        try {
            const response = await api.get('/tasks')
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    return {
        registerUserRequest,
        loginUserRequest,
        getCurrentUserRequest,
        getFullTaskListRequest,
        getCardUsername
    }
    
}