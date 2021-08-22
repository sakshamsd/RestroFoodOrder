/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

const BasketIcon = ({navigation}) => {
    const b = useSelector(state => state);

    console.log('basket icon navigation=>', navigation);
    return (
        <View
            style={[
                {padding: 5},
                Platform.OS === 'android' ? styles.iconContainer : null,
            ]}
            onPress={() => navigation.navigate('BasketPage')}>
            <View
                style={{
                    position: 'absolute',
                    height: 30,
                    width: 30,
                    borderRadius: 15,
                    backgroundColor: 'rgba(95,197,123,0.8)',
                    right: 15,
                    bottom: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                    {b.length}
                </Text>
            </View>
            <Icon
                onPress={() => navigation.navigate('BasketPage')}
                name="shopping-cart"
                color="#FFF"
                size={30}
            />
        </View>
    );
};

export default BasketIcon;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        paddingLeft: 20,
        paddingTop: 10,
        marginRight: 5,
    },
});
