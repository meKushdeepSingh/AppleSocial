import { axiosInstance } from "./axiosConfig"
import { config } from "./config"


export const homePageApi = () => {
    return axiosInstance({
        method: 'GET',
        url: config.covidApi
    })
}