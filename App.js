import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MenuPage from './app/views/MenuPage';
import AddItemPage from './app/views/AddItemPage';
import BasketPage from './app/views/BasketPage';
import CheckoutPage from './app/views/CheckoutPage';
import BasketIcon from './app/components/BasketIcon/index';
import {NativeBaseProvider} from 'native-base';

import Header from './app/components/header';
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <NativeBaseProvider>
                    <Stack.Navigator
                        screenOptions={navigation => ({
                            headerRight: () => <BasketIcon {...navigation} />,
                            headerStyle: {
                                backgroundColor: '#00A82D',
                                paddingHorizontal: 10,
                            },
                            headerTintColor: '#fff',
                        })}>
                        <Stack.Screen
                            name="MenuPage"
                            component={MenuPage}
                            options={{
                                headerTitle: () => <Header title="Menu" />,
                            }}
                        />
                        <Stack.Screen
                            name="AddItemPage"
                            component={AddItemPage}
                            options={{
                                headerTitle: () => <Header title="Add Item" />,
                            }}
                        />
                        <Stack.Screen
                            name="BasketPage"
                            component={BasketPage}
                            options={{
                                headerTitle: () => <Header title="My Basket" />,
                            }}
                        />
                        <Stack.Screen
                            name="CheckoutPage"
                            component={CheckoutPage}
                            options={{
                                headerTitle: () => <Header title="Checkout" />,
                            }}
                        />
                    </Stack.Navigator>
                </NativeBaseProvider>
            </Provider>
        </NavigationContainer>
    );
}
