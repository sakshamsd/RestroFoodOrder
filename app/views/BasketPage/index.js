/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeItem, subtractQuantity, addQuantity} from './../../redux/action';

function BasketPage({navigation}) {
    const basketItems = useSelector(state => state);
    const dispatch = useDispatch();

    const renderSeparator = () => {
        return (
            <View
                style={{height: 1, width: '100%', backgroundColor: '#DCDCDC'}}
            />
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={basketItems}
                ItemSeparatorComponent={renderSeparator}
                renderItem={({item, index}) => (
                    <View
                        style={{
                            paddingRight: 5,
                            paddingLeft: 5,
                            paddingTop: 10,
                            paddingBottom: 10,
                            borderBottomColor: '#DCDCDC',
                            borderBottomWidth: 1,
                        }}>
                        <View>
                            <Text style={styles.itemNameText}>
                                {item.itemName}
                            </Text>
                        </View>
                        <View style={{marginTop: 3}}>
                            <Text style={styles.itemPriceText}>
                                Rs. {item.itemTotalPrice}
                            </Text>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                height: 40,
                            }}>
                            <View
                                style={{
                                    width: '50%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}>
                                <Text>Quantity:</Text>
                            </View>
                            <View
                                style={{
                                    width: '50%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}>
                                <View
                                    style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        height: 40,
                                    }}>
                                    <View
                                        style={{
                                            width: 30,
                                            backgroundColor: '#00A82D',
                                            borderTopLeftRadius: 4,
                                            borderBottomLeftRadius: 4,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                dispatch(addQuantity(item))
                                            }>
                                            <Text
                                                style={{
                                                    fontSize: 17,
                                                    color: 'white',
                                                }}>
                                                +
                                            </Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View
                                        style={{
                                            width: 30,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <Text style={{fontSize: 17}}>
                                            {item.itemQuantity}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            width: 30,
                                            backgroundColor: '#00A82D',
                                            borderTopRightRadius: 4,
                                            borderBottomRightRadius: 4,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                dispatch(subtractQuantity(item))
                                            }>
                                            <Text
                                                style={{
                                                    fontSize: 17,
                                                    color: 'white',
                                                }}>
                                                -
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                backgroundColor: 'red',
                                width: '100%',
                                height: 40,
                                color: 'white',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10,
                            }}>
                            <TouchableOpacity
                                onPress={() => dispatch(removeItem(item))}>
                                <Text style={{color: 'white'}}>Remove</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={styles.checkoutButtonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('CheckoutPage')}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BasketPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    itemNameText: {
        fontSize: 16,
    },
    itemPriceText: {
        fontSize: 14,
        color: 'grey',
    },

    checkoutButtonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    checkoutButtonContainer: {
        position: 'relative',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A82D',
        color: '#FFFFFF',
        borderRadius: 5,
        height: 40,
    },
});
