// In App.js in a new project

import * as React from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrendingScreen from '../screens/Trending/index';
import Category from '../screens/Category/index';

const Stack = createStackNavigator();

const HomeStack = (props: any) => {
    const onHandleOpenDrawer = () => {
        props.navigation.openDrawer();
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    headerTitleAlign: 'left',
                    headerLeft: () => (
                        <TouchableOpacity onPress={onHandleOpenDrawer}>
                            <Icon
                                name="view-headline"
                                type="material-community"
                                size={32}
                                containerStyle={{ paddingLeft: 10 }}
                                iconStyle={{ color: '#999999' }}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity onPress={onHandleOpenDrawer}>
                                <Icon
                                    name="search"
                                    type="evilicon"
                                    size={32}
                                    iconStyle={{ color: '#999999' }}
                                    containerStyle={{ marginHorizontal: 12 }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onHandleOpenDrawer}>
                                <Icon
                                    name="notifications"
                                    type="material"
                                    size={28}
                                    iconStyle={{ color: '#999999' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={onHandleOpenDrawer}>
                                <View>
                                    <Image
                                        source={{
                                            uri:
                                                'https://avatars1.githubusercontent.com/u/17435062?s=400&u=e7c2ce6f6e920acaa793ddd105e91fa2c624c713&v=4'
                                        }}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 50,
                                            marginHorizontal: 20
                                        }}
                                    />
                                    <View
                                        style={{
                                            position: 'absolute',
                                            bottom: -2,
                                            right: 14,
                                            width: 15,
                                            height: 15,
                                            backgroundColor: '#40FE34',
                                            borderRadius: 50,
                                            borderWidth: 2,
                                            borderColor: '#fff'
                                        }}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                    ),
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 18
                    }
                }}
            />
        </Stack.Navigator>
    );
};

const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator initialRouteName="Trending">
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Hot" component={Category} />
        </Tab.Navigator>
    );
};

export default HomeStack;
