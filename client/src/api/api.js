import axios from 'axios'

const base = 'https://api-joaolucas.herokuapp.com/api/v1'

const API = axios.create({
  baseURL: base
})

export default API
