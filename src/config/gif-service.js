import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const baseUrl = 'http://api.giphy.com/v1/gifs/';

const getCategories = () => {
    return axios.get(`${baseUrl}categories?api_key=${API_KEY}`);
};

const getGifList = (categoryName) => {
    return axios.get(`${baseUrl}search?api_key=${API_KEY}&q=${categoryName}`);
};

export default { getCategories, getGifList };
