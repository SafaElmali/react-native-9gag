import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Trend = (props: any) => {
    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('Trend Detail', {
                    trend_name: props.trend_name
                })
            }
        >
            <View style={styles.trendView}>
                <Text style={styles.trendTitle}>{props.trend_name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    trendView: {
        backgroundColor: '#E5E5E5',
        margin: 10,
        padding: 5
    },
    trendTitle: {
        color: '#000',
        fontWeight: '500',
        fontSize: 16
    }
});

export default Trend;
