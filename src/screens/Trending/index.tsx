import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import TrendSearchList from './TrendSearchList/index';
import gifService from '../../config/gif-service';
import Gif from '../../components/Gif/index';

export default class Trending extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            list: [],
            offset: 0,
            loading: false
        };
    }

    componentDidMount() {
        this.getTrendGifs();
    }

    renderFooter = () => {
        //it will show indicator at the bottom of the list when data is loading otherwise it returns null
        if (!this.state.loading) return null;
        return <ActivityIndicator style={{ color: '#000' }} />;
    };

    getTrendGifs = () => {
        const { offset, list }: any = this.state;
        this.setState({ loading: true });

        gifService.getTrendGifs(offset).then((res) => {
            if (!res.data.data) {
                return;
            }
            this.setState({
                list: list.concat(res.data.data),
                offset: offset + 12,
                loading: false,
                isRefreshing: false
            });
        });
    };

    render() {
        const { list }: any = this.state;
        return (
            <View style={styles.postListView}>
                <TrendSearchList />
                {list.length > 0 ? (
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={list}
                        renderItem={({ item }) => <Gif gif={item} />}
                        keyExtractor={(item: any) => item.id}
                        onEndReached={() => this.getTrendGifs()}
                        onEndReachedThreshold={0.4}
                        ListFooterComponent={this.renderFooter.bind(this)}
                    />
                ) : null}
            </View>
        );
    }
}

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
