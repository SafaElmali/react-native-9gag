import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Category from '../screens/Category/index';
import gifService from '../config/gif-service';

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
        <Drawer.Navigator initialRouteName="Category">
            {categoryList.length > 0 ? (
                categoryList.map((category: any, index) => (
                    <Drawer.Screen
                        initialParams={category.name}
                        key={index}
                        name={category.name}
                        component={Category}
                    />
                ))
            ) : (
                <Drawer.Screen name="Category" component={Category} />
            )}
        </Drawer.Navigator>
    );
};

export default DrawerNavigation;
