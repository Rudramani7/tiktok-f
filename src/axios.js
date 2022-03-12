import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-b-clone.herokuapp.com/",
});

export default instance;