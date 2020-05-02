import * as React from 'react';
import { Input } from 'react-native-elements';
import { View } from 'react-native';

const Search = () => {
    const onDisplaySearch = () => {};

    const onHandleUserInput = (value: any) => {
        console.log(value);
    };

    return (
        <View>
            <Input
                placeholder="Comment"
                leftIcon={{ type: 'font-awesome', name: 'comment' }}
                onChangeText={(value) => onHandleUserInput(value)}
            />
        </View>
    );
};

export default Search;
