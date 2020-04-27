import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigationContainer from './src/navigations/AppNavContainer';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <AppNavigationContainer />
            </SafeAreaView>
        </>
    );
};

export default App;
