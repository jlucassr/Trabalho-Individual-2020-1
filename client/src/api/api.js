import axios from 'axios'

const url_api = process.env.api_url
// const base = 'http://api-joaolucas.herokuapp.com/api/v1'

const API = axios.create({
  baseURL: url_api
})

export default API
