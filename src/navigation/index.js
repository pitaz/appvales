import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Transactions from '../screens/Transactions';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="home">
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="transactions" component={Transactions} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
