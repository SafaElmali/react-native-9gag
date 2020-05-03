import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const HeaderRight = (props: any) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <View style={styles.HeaderView}>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Icon
                    name="search"
                    type="evilicon"
                    size={32}
                    iconStyle={styles.IconColor}
                    containerStyle={{ marginHorizontal: 12 }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <Icon
                    name="notifications"
                    type="material"
                    size={28}
                    iconStyle={styles.IconColor}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleOpenDrawer}>
                <View>
                    <Image
                        source={require('../../../assets/images/avatar.jpeg')}
                        style={styles.UserLogo}
                    />
                    <View style={styles.UserActive} />
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    HeaderView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    UserLogo: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginHorizontal: 20
    },
    UserActive: {
        position: 'absolute',
        bottom: -2,
        right: 14,
        width: 15,
        height: 15,
        backgroundColor: '#40FE34',
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff'
    },
    IconColor: {
        color: '#999999'
    }
});

export default HeaderRight;
