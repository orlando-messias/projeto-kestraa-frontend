import axios from 'axios';

const mercadoriaApi = () => axios.create({
  baseURL: 'http://172.20.10.177:5502/merchandise'
});

export default mercadoriaApi;
