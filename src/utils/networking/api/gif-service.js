/* eslint-disable prettier/prettier */
import { API_KEY } from 'react-native-dotenv';
import axios from '../config/axios-global';

const getCategories = () => {
    return axios().get(`gifs/categories?api_key=${API_KEY}`);
};

const getGifList = (categoryName) => {
    return axios().get(
        `gifs/search?api_key=${API_KEY}&q=${categoryName}&limit=10`
    );
};

const getTrendSearchs = () => {
    return axios().get(`trending/searches?api_key=${API_KEY}`);
};

const getTrendGifs = (offset = 0) => {
    return axios().get(`gifs/trending?api_key=${API_KEY}&limit=12&offset=${offset}`);
};

export default { getCategories, getGifList, getTrendSearchs, getTrendGifs };
