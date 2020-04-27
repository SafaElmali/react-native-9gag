import axios from 'axios';
import { API_KEY } from 'react-native-dotenv';

const baseUrl = 'http://api.giphy.com/v1/';

const getCategories = () => {
    return axios.get(`${baseUrl}gifs/categories?api_key=${API_KEY}`);
};

const getGifList = (categoryName) => {
    return axios.get(
        `${baseUrl}gifs/search?api_key=${API_KEY}&q=${categoryName}`
    );
};

const getTrendList = () => {
    return axios.get(`${baseUrl}trending/searches?api_key=${API_KEY}`);
};

export default { getCategories, getGifList, getTrendList };
