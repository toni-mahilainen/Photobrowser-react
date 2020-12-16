import axios from 'axios'
<<<<<<< HEAD
const baseUrl = 'https://jsonplaceholder.typicode.com/photos?'

const get = async (start, limit) => {
    const response = await axios.get(`${baseUrl}_start=${start}&_limit=${limit}`)
    return response.data
}

export default { get }
=======
const baseUrl = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { getAll }
>>>>>>> 56afb5c (Kaikki kuvat palvelimelta. Tilan päivitys reduxilla)
