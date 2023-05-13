import api from "../services/axios"

export const useRequests = () => {
    const registerUserRequest = async (payload: any) => {
        try {
            const response = await api.post('/user', payload)
            return response
        } catch (error) {
            if(error){
                console.log(error)
            }else{
                console.log(error)
            }
            throw new Error('')
        } 
    }
    const loginUserRequest = async (payload: any) =>{
        try {
            const response = await api.post('/login', payload)
            console.log(response)
            console.log('Passou da primeira linha do trycatch da função no hook.')
            localStorage.setItem('task-manager:token', response.data.stsTokenManager.refreshToken)
            return response
        } catch (error) {
            if(error){
                console.log(error)
            }else{
                console.log(error)
                return error
            }
            throw new Error()
        }
    }
    return {
        registerUserRequest,
        loginUserRequest
    }
    
}