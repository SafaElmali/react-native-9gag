import axios from 'axios';

export default () => {
    return axios.create({ baseURL: 'http://api.giphy.com/v1/' });
}