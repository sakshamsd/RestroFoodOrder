/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Center} from 'native-base';

import {useSelector} from 'react-redux';
import {style} from 'styled-system';

function CheckoutPage() {
    const basketItems = useSelector(state => state);

    function getTotalCount() {
        let total = 0;

        for (let i = 0; i < basketItems.length; i++) {
            total = total + basketItems[i].itemTotalPrice;
        }
        return (
            <View style={style.container}>
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={{width: '40%'}}>
                        <Text>Total</Text>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text>Rs.{total}</Text>
                    </View>
                </View>
                <View style={{width: '100%', flexDirection: 'row'}}>
                    <View style={{width: '40%'}}>
                        <Text>Service Charge:</Text>
                    </View>
                    <View style={{width: '60%'}}>
                        <Text>Rs.{total * 0.1}</Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <Center padder>
            <View style={styles.container}>{getTotalCount()}</View>
        </Center>
    );
}

export default CheckoutPage;

const styles = StyleSheet.create({
    container: {
        paddingTop: 22,
    },
});
