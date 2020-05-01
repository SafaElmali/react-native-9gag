import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image, Icon } from 'react-native-elements';
import TrendSearchList from './TrendSearchList/index';
import gifService from '../../config/gif-service';

const Trending = () => {
    const [gifList, setGifList] = useState([]);

    useEffect(() => {
        gifService.getTrendGifs().then((res) => {
            console.log(res.data);
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

const Gif = (props) => {
    console.log(props);
    return (
        <View style={{ backgroundColor: 'yellow', marginVertical: 10 }}>
            <View style={styles.postHeaderView}>
                <View style={styles.postHeaderLeft}>
                    <Image
                        source={require('../../assets/images/funny-category.png')}
                        style={{ width: 30, height: 30 }}
                    />
                    <Text style={styles.postHeaderText}>Funny</Text>
                    <Text style={styles.postHeaderText}>8h</Text>
                </View>
                <View style={styles.postHeaderRight}>
                    <Icon name="bookmark" color="#A5A5A5" size={20} />
                    <Icon name="more-horiz" color="#A5A5A5" size={20} />
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: 'blue' }}>
                <Image
                    source={{
                        uri:
                            'https://i.pinimg.com/originals/fd/3c/cd/fd3ccd7b49e366b4206f5ac7f8fa8dac.gif'
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Text>Like Dislike</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    postListView: {
        flex: 1,
        backgroundColor: '#fff'
    },
    postHeaderText: {
        color: '#999'
    },
    postHeaderView: {
        paddingHorizontal: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
});

export default Trending;
