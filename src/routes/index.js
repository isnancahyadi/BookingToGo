import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddGuests, DetailPayment} from '../screens';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: '#FFFFFF'},
        }}>
        <Stack.Screen name="DetailPayment" component={DetailPayment} />
        <Stack.Screen name="AddGuests" component={AddGuests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
