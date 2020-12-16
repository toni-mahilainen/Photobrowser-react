import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }