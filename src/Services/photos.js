import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/photos?'

const get = async (start, limit) => {
    const response = await axios.get(`${baseUrl}_start=${start}&_limit=${limit}`)
    return response.data
}

export default { get }