import axios from 'axios';

const X_API_KEY: string = process.env.X_API_KEY || '';
const CMS_API_URL: string = process.env.CMS_API_URL + 'blogs' || ''

export const getBlogs = () => (
  axios.get(CMS_API_URL, { headers: {
    'Content-type': 'application/json',
    'X-API-KEY': X_API_KEY
  }})
)

export const getBlogBy = id => (
  axios.get(CMS_API_URL + id, { headers: {
    'Content-type': 'application/json',
    'X-API-KEY': X_API_KEY
  }})
)

export const axiosInstance = axios.create({
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': X_API_KEY
  },
})
