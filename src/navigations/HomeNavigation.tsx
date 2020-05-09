// In App.js in a new project

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TrendingScreen from '../screens/Trending/index';
import FollowingScreen from '../screens/Following/index';
import FreshScreen from '../screens/Fresh/index';
import Category from '../screens/Category/index';
import HeaderRight from '../components/Header/HeaderRight/index';
import HeaderLeft from '../components/Header/HeaderLeft/index';

const Stack = createStackNavigator();

const HomeStack = (props: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeTabs}
                options={{
                    headerTitleAlign: 'left',
                    headerLeft: () => <HeaderLeft {...props} />,
                    headerRight: () => <HeaderRight {...props} />,
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
        <Tab.Navigator
            initialRouteName="Trending"
            tabBarOptions={{
                labelStyle: { fontSize: 14, textTransform: 'none' },
            }}
        >
            {/* <Tab.Screen name="Hot" component={Category} /> */}
            <Tab.Screen name="Trending" component={TrendingScreen} />
            <Tab.Screen name="Fresh" component={FreshScreen} />
            <Tab.Screen name="Following" component={FollowingScreen} />
        </Tab.Navigator>
    );
};

export default HomeStack;
