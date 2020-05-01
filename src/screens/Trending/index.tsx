import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Image, Icon } from 'react-native-elements';
import Video from 'react-native-video';
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

const Gif = (props: any) => {
    console.log(props);
    return (
        <View style={styles.postView}>
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
            <View style={styles.postBodyView}>
                <Video
                    repeat={false}
                    source={{ uri: props.gif.images.downsized_small.mp4 }}
                    style={{
                        width: Number(props.gif.images.original_still.width),
                        height: Number(props.gif.images.original_still.height)
                    }}
                />
            </View>
            <View style={styles.postActionsView}>
                <View style={styles.postActionsLeft}>
                    <Icon
                        name="arrow-up"
                        type="entypo"
                        color="#999999"
                        size={32}
                    />
                    <Text style={styles.postActionText}>492</Text>
                    <Icon
                        name="arrow-down"
                        type="entypo"
                        color="#999999"
                        size={32}
                    />
                    <Text style={styles.postActionText}>18</Text>
                </View>
                <View style={styles.postActionsRight}>
                    <Icon
                        name="comment"
                        type="foundation"
                        color="#999999"
                        size={32}
                    />
                    <Text style={styles.postActionText}>69</Text>
                    <Icon
                        name="share"
                        type="entypo"
                        color="#999999"
                        size={32}
                    />
                    <Text
                        style={[
                            styles.postActionText,
                            { textTransform: 'uppercase' }
                        ]}
                    >
                        Share
                    </Text>
                </View>
            </View>
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
