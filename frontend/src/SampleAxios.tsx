import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { useEffect } from "react"
import User from "./types/user"

const SampleAxios = () => {
    const url = "https://jsonplaceholder.typicode.com"
const options: AxiosRequestConfig = {
    url: `${url}/users`,
    method: "GET",
};

const getData = async () => {
    try {
        const result: AxiosResponse<User[]> = await axios(options)
        const { data, status } = result
        console.log('data',data)
        console.log('status',status)
    } catch (e) {
        console.log(e)
    }
}

useEffect(() => {
    getData()
}, [])
    return (
        <p>SampleAxios</p>
    )
}

export default SampleAxios