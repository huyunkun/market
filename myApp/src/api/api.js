import axios from 'axios'


let api = axios.create({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })

export const merchantList = parms => api.get(`http://localhost:3000/merchantList`);