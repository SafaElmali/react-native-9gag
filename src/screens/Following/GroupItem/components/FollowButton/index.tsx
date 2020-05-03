import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const FollowButton = () => {
    return (
        <Button
            title="Follow"
            type="outline"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
        />
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        transform: [{ scale: 0.8 }],
        borderColor: 'lightgray',
        borderRadius: 10
    },
    titleStyle: {
        color: '#104A8E',
        fontSize: 18,
        fontWeight: '700'
    }
});

export default FollowButton;
