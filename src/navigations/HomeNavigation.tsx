// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../screens/Home/index';
import TrendingScreen from '../screens/Trending/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, Image } from 'react-native';
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
                            <Image
                                source={require('../assets/images/drawer-icon.png')}
                                style={{
                                    width: 36,
                                    height: 36,
                                    marginHorizontal: 10,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                    headerStyle: {
                        elevation: 0,
                    },
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
