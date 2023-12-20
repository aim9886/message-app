import axios from "axios";

let axiosInstances = axios.create({
    baseURL:"http://localhost:4000"
})

export default axiosInstances