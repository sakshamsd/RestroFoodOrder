import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MenuPage from '../views/MenuPage';
import AddItemPage from '../views/AddItemPage';
import BasketPage from '../views/BasketPage';
import CheckoutPage from '../views/CheckoutPage';
import BasketIcon from '../components/BasketIcon/index';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: <BasketIcon />,
        headerStyle: {
          backgroundColor: '#00A82D',
          paddingHorizontal: 10,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen name="MenuPage" component={MenuPage} />
      <Stack.Screen name="AddItemPage" component={AddItemPage} />
      <Stack.Screen name="BasketPage" component={BasketPage} />
      <Stack.Screen name="CheckoutPage" component={CheckoutPage} />
    </Stack.Navigator>
  );
};

// {
//   MenuPage: {screen: MenuPage},
//   AddItemPage: {screen: AddItemPage},
//   BasketPage: {screen: BasketPage},
//   CheckoutPage: {screen: CheckoutPage},
// },
// {
//   initialRouteName: 'MenuPage',

//   defaultNavigationOptions: {
//     headerRight: <BasketIcon />,
//     headerStyle: {
//       backgroundColor: '#00A82D',
//       paddingHorizontal: 10,
//     },
//     headerTintColor: '#fff',
//   },
// },

export default Routes;
