import axios from 'axios'

const api = axios.create({
    baseURL: 'https://tricky-gray-jersey.cyclic.app/',
    headers: {
        'Access-Control-Allow-Origin': 'https://tricky-gray-jersey.cyclic.app:3000',
        'Content-Type': 'application/json'
      }
})

export default api;