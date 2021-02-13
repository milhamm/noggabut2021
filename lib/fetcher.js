import axios from 'axios';

const baseURL = 'https://api.aang.dev/api';

const fetcher = (url) => axios.get(`${baseURL}${url}`).then((res) => res.data);

export default fetcher;
