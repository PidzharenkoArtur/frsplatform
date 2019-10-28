import axios from 'axios'

const a = axios.create({
  baseURL: 'https://ng.frsplatform.com',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken') || ''
  }

})

export default a;
