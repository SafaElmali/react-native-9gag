import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import gifService from '../../../utils/networking/api/gif-service';
import Trend from './components/Trend/index';
import { FlatList } from 'react-native-gesture-handler';

const TrendSearchList = (props) => {
    const [trendSearchList, setTrendSearchList] = useState([]);

    useEffect(() => {
        gifService.getTrendSearchs().then((res) => {
            setTrendSearchList(res.data.data);
        });
    }, []);

    return (
        <View>
            {trendSearchList.length > 0 ? (
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={trendSearchList}
                    renderItem={({ item }) => (
                        <Trend {...props} trend_name={item} />
                    )}
                    keyExtractor={(item) => item}
                />
            ) : null}
        </View>
    );
};

export default TrendSearchList;
