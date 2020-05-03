import React from 'react';
import { Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import GroupItem from './GroupItem';

const GROUPS = [
    {
        logo:
            'https://image.freepik.com/free-vector/90s-logo-style_9941-26.jpg',
        name: 'Born In 90s Chat',
        numOfMember: 3624
    },
    {
        logo:
            'https://is5-ssl.mzstatic.com/image/thumb/Purple123/v4/a1/f8/dc/a1f8dcb8-cb07-2a0e-54b7-e1cfb096ac76/source/512x512bb.jpg',
        name: 'Random Chat  (25- 34yo)',
        numOfMember: 9110
    },
    {
        logo:
            'https://www.teknoblog.com/wp-content/uploads/2017/01/animal-crossing-310117.jpg',
        name: 'Animal Crossing',
        numOfMember: 389
    },
    {
        logo:
            'https://www.sarahdoody.com/wp-content/uploads/2013/12/ask-me-anything.jpg',
        name: 'Ask Me Anything',
        numOfMember: 3138
    },
    {
        logo:
            'https://previews.123rf.com/images/zmshv/zmshv2003/zmshv200300012/142752209-coronavirus-covid-19-ncov-19-2019-2020-vector-logo-icon-illustration.jpg',
        name: 'COVID-19 (Wuhan Virus)',
        numOfMember: 4226
    }
];

const Following = () => {
    const groupRows = () => {
        return GROUPS.map((group) => (
            <GroupItem key={group.name} group={group} />
        ));
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={styles.followingHeader}>Featured</Text>
            <View style={{ flex: 1 }}>{groupRows()}</View>
        </View>
    );
};

const styles = StyleSheet.create({
    followingHeader: {
        padding: 10,
        color: '#999',
        fontWeight: '700'
    }
});

export default Following;
