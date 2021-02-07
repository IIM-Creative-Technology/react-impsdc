import axios from 'axios'
// import jwt from "jsonwebtoken"

export default axios.create({
    baseURL: 'http://localhost:2020'
    // You can add your headers here
})

axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("accessToken")
        config.headers['x-access-token'] = token || "_no_user"
        config.headers['Content-Type'] = 'application/json'

        // const decoded = jwt.decode(token)
        // const timestampNow = Date.now()
        // const timestampExp = decoded.exp * 1000
        // const diff = timestampExp - timestampNow

        // if (diff < 0) {
        //     localStorage.removeItem('accessToken')
        // }

        return config
    }, error => {
        Promise.reject(error)
    }
)