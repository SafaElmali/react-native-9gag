import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import gifService from '../utils/networking/api/gif-service';
import HomeTabs from './HomeNavigation';
import CategoryStack from './CategoryNavigation';

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
            <Drawer.Screen name="Home" component={HomeTabs} />
            {categoryList.map((category: any, index) => (
                <Drawer.Screen
                    initialParams={category.name}
                    key={index}
                    name={category.name}
                    component={CategoryStack}
                />
            ))}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
