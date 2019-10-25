import axios from 'axios'

const a = axios.create({
  baseURL: 'https://ng.frsplatform.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).accessToken
  }

})

export default a;
