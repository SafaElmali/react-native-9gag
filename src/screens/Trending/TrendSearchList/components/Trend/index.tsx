import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Trend = ({ trend_name }: any) => {
    return (
        <TouchableOpacity>
            <View style={styles.trendBox}>
                <Text style={styles.trendTitle}>{trend_name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    trendBox: {
        backgroundColor: '#E5E5E5',
        margin: 10,
        padding: 5,
    },
    trendTitle: {
        color: '#000',
        fontWeight: '700',
        fontSize: 16,
    }
});

export default Trend;
