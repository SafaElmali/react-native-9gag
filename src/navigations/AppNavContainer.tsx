import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './DrawerNavigation';

const AppNavigationContainer = () => {
    return (
        <NavigationContainer>
            <DrawerNavigation />
        </NavigationContainer>
    );
};

export default AppNavigationContainer;
