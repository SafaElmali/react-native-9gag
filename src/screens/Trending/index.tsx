import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TrendSearchList from './TrendSearchList/index';
import gifService from '../../config/gif-service';
import Gif from '../../components/Gif/index';

const Trending = () => {
    const [gifList, setGifList] = useState([]);

    useEffect(() => {
        gifService.getTrendGifs().then((res) => {
            setGifList(res.data.data);
        });
    }, []);

    return (
        <View style={styles.postListView}>
            <TrendSearchList />
            {gifList.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={gifList}
                    renderItem={({ item }) => <Gif gif={item} />}
                    keyExtractor={(item: any) => item.id}
                />
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    postView: {
        marginVertical: 10
    },
    postHeaderView: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    postHeaderText: {
        color: '#999'
    },
    postHeaderRight: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    postHeaderLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postBodyView: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    postActionsView: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    postActionsLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    postActionsRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    postActionText: {
        color: '#9999'
    }
});

export default Trending;
