import axios from 'axios'
// import jwt from "jsonwebtoken"

export default axios.create({
    baseURL: process.env.REACT_APP_QUIZZ_API
})

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("accessToken")
        config.headers['x-access-token'] = token || "_no_user"
        config.headers['Content-Type'] = 'application/json'

        return config
    }, error => {
        Promise.reject(error)
    }
)