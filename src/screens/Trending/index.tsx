import React from 'react';
import { View, Text } from 'react-native';
import TrendSearchList from './TrendSearchList/index';

const Trending = () => {
    return (
        <View>
            <TrendSearchList />
            <Text>Hello from Trending</Text>
        </View>
    );
};

export default Trending;
