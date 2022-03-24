import axios from 'axios'
axios.defaults.baseURL = "https://inventory-system-1e4c2-default-rtdb.firebaseio.com/"

// export const API_URL = process.env.API_DATA_URL

export default axios.create({
    // baseURL:API_URL,
}) 