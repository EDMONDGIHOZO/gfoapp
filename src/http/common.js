import axios from 'axios'

const customInstance = axios.create ({
    baseURL : 'https://webapi.aidspan.org/api/v1'
})
customInstance.defaults.headers.post['Accept'] = 'application/json'
