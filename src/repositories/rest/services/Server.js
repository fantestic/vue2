import axios from 'axios'


var errorHandler = err => { console.log(err); throw new Error(err.config.url);}

const axiosRead = axios.create({
  baseURL: process.env.VUE_APP_FANTESTIC_API,
})
const axiosWrite = axios.create({
  baseURL: process.env.VUE_APP_FANTESTIC_API,
})
axiosRead.interceptors.response.use(res => res, errorHandler)
axiosWrite.interceptors.response.use(res => res, errorHandler)

export default {
  read: axiosRead,
  write: axiosWrite
}
