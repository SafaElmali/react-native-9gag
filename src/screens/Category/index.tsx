import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import gifService from '../../utils/networking/config/gif-service';
import TrendSearchList from '../Trending/TrendSearchList';
import Gif from '../../components/Gif';

const Category = (props: any) => {
    const [gifList, setGifList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCategoryGifs();
    }, []);

    const getCategoryGifs = () => {
        if (!props.route.params) {
            gifService
                .getGifList(props.route.name)
                .then((res) => {
                    setGifList(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            gifService
                .getGifList(props.route.params.trend_name)
                .then((res) => {
                    setGifList(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <View style={styles.postListView}>
            {!props.route.params ? <TrendSearchList {...props} /> : null}
            {gifList.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={gifList}
                    renderItem={({ item }) => <Gif gif={item} />}
                    keyExtractor={(item: any) => item.id}
                    onEndReached={() => getCategoryGifs()}
                    onEndReachedThreshold={0.2}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default Category;
