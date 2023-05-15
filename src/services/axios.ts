import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Content-Type': 'application/json'
      }
})

export default api;