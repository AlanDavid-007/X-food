import React, {Component} from 'react';
import 'react-native-gesture-handler';

// Notification Feature
import { notificationManager } from './components/NotificationHandler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WishlistScreen from './src/views/screens/WishlistScreen';
import CartScreen from './src/views/screens/CartScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import HomeScreen from './src/views/screens/HomeScreen';
import OnBoardScreen from './src/views/screens/OnBoardScreen';

const Stack = createNativeStackNavigator();
const notificador = notificationManager;

export default function App () {
    
      return(

      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoardScreen" component={OnBoardScreen}/>

        <Stack.Screen name="HomeScreen" component={BottomNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
      )
    }
   



