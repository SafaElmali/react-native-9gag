import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '../screens/Category/index';
import Home from '../screens/Home/index';
import gifService from '../config/gif-service';
import HomeStack from './HomeNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [categoryList, setCategoryList] = React.useState([]);

    React.useEffect(() => {
        gifService
            .getCategories()
            .then((result) => {
                setCategoryList(result.data.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStack} />
            {categoryList.map((category: any, index) => (
                <Drawer.Screen
                    initialParams={category.name}
                    key={index}
                    name={category.name}
                    component={Category}
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
