import axios from "axios";
export default axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 60000,
  headers: {
    'Content-Type':'application/json'
  }
});
