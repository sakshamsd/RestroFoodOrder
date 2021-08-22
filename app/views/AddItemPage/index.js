/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import Spinner from 'react-native-number-spinner';
import {useDispatch} from 'react-redux';
import {addToBasket} from './../../redux/action';

const {width} = Dimensions.get('window');
const frameWidth = width - 30;

export default function AddItemPage({navigation, route}) {
    const dispatch = useDispatch();
    const [itemDetails, setItemDetails] = useState({
        itemName: '',
        itemPrice: '',
        itemQuantity: 1,
        itemId: '',
    });

    useEffect(() => {
        const {id, name, price} = route.params;
        setItemDetails({
            ...itemDetails,
            itemName: name,
            itemPrice: price,
            itemId: id,
        });
        console.log('sssssssssssss', itemDetails);
    }, [route]);

    const addItem = () => {
        dispatch(addToBasket(itemDetails));
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 10,
                    paddingBottom: 10,
                }}>
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 20}}>{itemDetails.itemName}</Text>
                </View>
                <View style={{width: '30%'}}>
                    <Text style={{fontSize: 18, color: 'grey'}}>
                        Rs. {itemDetails.itemPrice}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 10,
                    paddingBottom: 10,
                }}>
                <View style={{width: '70%'}}>
                    <Text style={{fontSize: 18}}>Quantity:</Text>
                </View>

                <View style={{width: '30%'}}>
                    <Spinner
                        max={10}
                        min={1}
                        value={itemDetails.itemQuantity}
                        default={5}
                        color="#f60"
                        numColor="#f60"
                        onNumChange={itemQuantity =>
                            setItemDetails({
                                ...itemDetails,
                                itemQuantity: itemQuantity,
                            })
                        }
                    />
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <View style={styles.buttonContent}>
                    <TouchableOpacity style={styles.addItemButton}>
                        <Text style={styles.buttonText} onPress={addItem}>
                            ADD ITEM
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContent}>
                    <TouchableOpacity
                        style={styles.cancelButton}
                        onPress={() => navigation.goBack()}>
                        <Text style={styles.buttonText}> CANCEL </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        position: 'relative',
    },

    buttonContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    addItemButton: {
        width: frameWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00A82D',
        margin: 5,
        color: '#FFFFFF',
        borderRadius: 5,
        height: 40,
    },
    cancelButton: {
        width: frameWidth,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 5,
        color: '#FFFFFF',
        borderRadius: 5,
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: '5%',
        right: '5%',
    },
});
