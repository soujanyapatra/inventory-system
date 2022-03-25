import axios from 'axios'
// import Vue from 'vue'
axios.defaults.baseURL = "https://inventory-system-1e4c2-default-rtdb.firebaseio.com/"

// export const API_URL = process.env.API_DATA_URL
// Vue.prototype.$axios = Axios;

// export default axios.create({
//     baseURL: 'https://inventory-system-1e4c2-default-rtdb.firebaseio.com/',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })
export default axios;