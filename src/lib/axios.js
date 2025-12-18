import axios from 'axios'

// Create Axios instance
export const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL, // Replace with your API (backend) base URL
     // withCredentials: true, // If you're using cookies
     headers: {
          'Content-Type': 'application/json',
     },
})

// Request Interceptor
// api.interceptors.request.use(
//      (config) => {
//           const { token } = useAuthStore.getState()
//           if (token) {
//                config.headers.Authorization = `Bearer ${token}`
//           }
//           return config
//      },
//      (error) => Promise.reject(error)
// )

// Response Interceptor
// api.interceptors.response.use(
//      (response) => response,
//      (error) => {
//           const { logout } = useAuthStore.getState()

//           // Handle unauthorized errors
//           if (error.response?.status === 401) {
//                logout()
//                // Optional: redirect to login
//                window.location.href = '/login'
//           }

//           return Promise.reject(error)
//      }
// )

 
