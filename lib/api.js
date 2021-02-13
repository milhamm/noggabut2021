import axios from 'axios';

const BASE_URL = 'https://api.aang.dev/api';

export default axios.create({
  baseURL: BASE_URL,
});
