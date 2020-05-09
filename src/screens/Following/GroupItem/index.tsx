import React from 'react';
import { Text, Image } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import FollowButton from './components/FollowButton';

const GroupItem = (props: any) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={styles.itemView}>
                <View style={styles.itemLogo}>
                    <Image
                        source={{ uri: props.group.logo }}
                        style={{ width: 40, height: 40 }}
                    />
                </View>
                <View style={styles.itemDetailView}>
                    <Text style={styles.itemText}>{props.group.name}</Text>
                    {props.group.numOfMember > 999 ? (
                        <Text>
                            {props.group.numOfMember.toString().substring(0, 1)}
                            ,{props.group.numOfMember.toString().substring(1)}
                        </Text>
                    ) : (
                        <Text>{props.group.numOfMember}</Text>
                    )}
                </View>
            </View>
            <View style={styles.buttonView}>
                <FollowButton />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemView: {
        flex: 2,
        padding: 10,
        flexDirection: 'row'
    },
    itemLogo: {
        paddingRight: 20
    },
    itemDetailView: {
        justifyContent: 'space-between'
    },
    itemText: {
        fontWeight: '700'
    },
    buttonView: {
        flex: 1
    }
});

export default GroupItem;
