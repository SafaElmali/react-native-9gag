import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import gifService from '../../config/gif-service';

const Category = (props: any) => {
    const [gifList, setGifList] = useState([]);

    useEffect(() => {
        gifService
            .getGifList(props.route.name)
            .then((res) => {
                console.log(res);
                setGifList(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Text> Welcome to Category</Text>
        </View>
    );
};

export default Category;
