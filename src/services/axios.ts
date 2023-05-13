import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3001',
        'Content-Type': 'application/json'
      }
})

const token = localStorage.getItem('task-manager:token');

if (token) {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default api;