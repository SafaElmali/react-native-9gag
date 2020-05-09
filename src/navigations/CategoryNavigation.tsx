import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FreshScreen from '../screens/Fresh';
import HeaderLeft from '../components/Header/HeaderLeft';
import HeaderRight from '../components/Header/HeaderRight';
import CategoryScreen from '../screens/Category';

const Tab = createMaterialTopTabNavigator();

function CategoryTabNav(props: any) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hot">
                {() => <CategoryScreen {...props} />}
            </Tab.Screen>
            <Tab.Screen name="Fresh" component={FreshScreen} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();

const CategoryStack = (props: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={props.route.name}
                component={CategoryTabNav}
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

export default CategoryStack;
