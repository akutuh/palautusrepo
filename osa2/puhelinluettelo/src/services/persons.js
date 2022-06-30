import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (updatedObject, id) => {
    return axios.put(`${baseUrl}/${id}`, updatedObject)
}

export default { getAll, create, deletePerson, update}