import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-d96a2.firebaseio.com/'
});

export default instance;