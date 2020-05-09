import React from 'react';
import { Text } from 'react-native-elements';
import { View } from 'react-native';

const Fresh = (props: any) => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text style={{ fontSize: 32 }}>
                {' '}
                Welcome to {props.route.name} Section
            </Text>
        </View>
    );
};

export default Fresh;
