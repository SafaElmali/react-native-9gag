import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';

const HeaderLeft = (props: any) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <TouchableOpacity onPress={onHandleOpenDrawer}>
            <Icon
                name="view-headline"
                type="material-community"
                size={32}
                containerStyle={styles.IconContainer}
                iconStyle={styles.IconColor}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    IconContainer: {
        paddingLeft: 10
    },
    IconColor: {
        color: '#999999'
    }
});

export default HeaderLeft;
