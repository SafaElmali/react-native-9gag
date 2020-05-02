import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image, Icon } from 'react-native-elements';
import Video from 'react-native-video';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Gif = (props: any) => {
    const [paused, setPaused] = useState(false);

    const togglePlay = () => {
        setPaused(!paused);
    };

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
                <TouchableOpacity onPress={togglePlay}>
                    <Video
                        repeat={true}
                        paused={paused}
                        source={{ uri: props.gif.images.downsized_small.mp4 }}
                        style={{
                            width: Number(
                                props.gif.images.original_still.width
                            ),
                            height: Number(
                                props.gif.images.original_still.height
                            )
                        }}
                    />
                </TouchableOpacity>
                {paused ? (
                    <View
                        style={{
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 100,
                            height: 100,
                            borderRadius: 50,
                            backgroundColor: '#000',
                            opacity: 0.7
                        }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                textTransform: 'uppercase',
                                fontSize: 22
                            }}
                        >
                            Gif
                        </Text>
                    </View>
                ) : null}
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

export default Gif;

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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
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
