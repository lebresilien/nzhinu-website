import axios from 'axios'

const api = () => {

  let instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  })

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config: { headers: { Authorization: string; }; }) {
    const token = window.localStorage.getItem('userToken')
    config.headers.Authorization =  token ? `Bearer ${token}` : ''
    return config
  });

  return instance
};

export default api()