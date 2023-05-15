import api from "../services/axios"
import { iUserToken } from "../interfaces/interfaces";
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { iRegisterFormValues } from "../interfaces/interfaces";
import { iUserLogin } from "../interfaces/interfaces";
import { loginSchema, registerSchema } from "../schemas/schemas";

export const useRequests = () => {
    const navigate = useNavigate()
    const registerUserRequest = async (payload: iRegisterFormValues) => {
        try {
            const response = await api.post('/users', payload)
            navigate('/')
            toast.success('Usuário registrado com sucesso!', {
              position: 'top-center',
              theme: "dark",
            })
            return response
        } catch (error: any) {
            toast.error(`${error.response.data.message}`, {
                position: 'top-center'
            })
        } 
    }      
    const loginUserRequest = async (payload: iUserLogin) => {
        try {
            const validatedLogin = await loginSchema.validate(payload, { abortEarly: false });
            const response = await api.post('/login', validatedLogin)
            const user: iUserToken = {
                uid: response.data.uid,
                name: response.data.displayName,
                photoURL: response.data.photoURL
            }
            localStorage.setItem('task-manager:token', response.data.stsTokenManager.accessToken)
            localStorage.setItem('task-manager:user', JSON.stringify(user))
            const token = localStorage.getItem('task-manager:token');

            if (token) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }

            navigate('/home')
            toast.success('Login realizado com sucesso.',{
                position: 'top-center',
                theme: "dark"
            })
            return response
        } catch (error) {
            console.log(error)
            toast.error('Email ou senha inválidos.',{
                position: 'top-center',
                theme: "dark"
            })
        }
    }
    const getCurrentUserRequest = (): iUserToken | null => {
        try {
          const getUser: string | null = localStorage.getItem('task-manager:user');
          if (getUser) {
            const user: iUserToken = JSON.parse(getUser);
            return user;
          }
          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      };
            
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
    const createUserTaskRequest = async (title: string, description: string) => {
        try {
            await api.post('/tasks', {
                title: title,
                description: description
            })
            toast.success('Tarefa criada com sucesso!', {
                position: 'top-center',
                theme: "dark",
            })
        } catch (error) {
            console.log(error)
        }
    }

    const editUserTaskRequest = async (title: string, description: string, id: string) => {
        try {
            await api.patch(`/tasks/${id}`, {
                title: title,
                description: description
            })
            toast.success('Tarefa atualizada com sucesso!', {
                position: 'top-center',
                theme: "dark",
            })
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUserRequest = async (id: string) => {
        try {
            await api.delete(`/tasks/${id}`)
            toast.success('Tarefa excluída com sucesso!', {
                position: 'top-center',
                theme: "dark",
            })
        } catch (error) {
            console.log(error)
        }
    }

    return {
        registerUserRequest,
        loginUserRequest,
        getCurrentUserRequest,
        getFullTaskListRequest,
        getCardUsername,
        createUserTaskRequest,
        editUserTaskRequest,
        deleteUserRequest
    }
    
}