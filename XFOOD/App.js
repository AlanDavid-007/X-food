import React, {Component} from 'react';
// import 'react-native-gesture-handler';
import {StatusBar, Text, ScrollView} from 'react-native';
import COLORS from './src/consts/colors';

// Notification Feature
import {notificationManager} from './components/NotificationHandler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import HomeScreen from './src/views/screens/HomeScreen';
import WishlistScreen from './src/views/screens/WishlistScreen';
import CartScreen from './src/views/screens/CartScreen';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';

const Stack = createStackNavigator();
const notificador = notificationManager;

// const App = () => {
//   return (
//     <ScrollView>
//     <NavigationContainer>
//       <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
//       <Stack.Navigator screenOptions={{headerShown: false}}>
//         <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
//         <Stack.Screen name="Home" component={BottomNavigator} />
//         <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//     </ScrollView> 
//   );
// };

  export default class App extends Component {
    constructor(props) {
      super(props)
    }
  
    componentDidMount() {
      notificador.configurar()
      // notificador.criarCanal()
      // notificador.agendarNotificacao()
    }
  
    disparar = () => {
      notificador.showNotification(
        1,
        "Seja Bem Vindo!",
        "Veja nosso Github para Mais!",
        {}, // data
        {} // options
      )
    }
  
    cancelar = () => {
      notificador.cancelAllLocalNotification()
    }

    agendar = () => {
      notificador.agendarNotificacao()
    }
  
    render() {
    
      return(
        <NavigationContainer independent={true}>
         <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <Stack.Navigator screenOptions={{headerShown: false}}>

            <Stack.Screen name="BoardScreen">
                {
                  ({navigation}) => {notificador.setNavegador(navigation); 
                  return(<OnBoardScreen navegador={navigation} enviarNotificacao={this.disparar} cancelar={this.cancelar} agendar={this.agendar} />)}
                }
              </Stack.Screen>

              <Stack.Screen name="HomeScreen">
                {
                  ({navigation}) => {notificador.setNavegador(navigation); 
                  return(<BottomNavigator navegador={navigation} />)}
                }
              </Stack.Screen>

              <Stack.Screen name="DetailsScreen">
                {
                  ({navigation}) => {notificador.setNavegador(navigation); 
                  return(<DetailsScreen navegador={navigation} />)}
                }
              </Stack.Screen>

              <Stack.Screen name="WishlistScreen">
                {
                  ({navigation}) => {notificador.setNavegador(navigation); 
                  return(<WishlistScreen navegador={navigation} />)}
                }
              </Stack.Screen>

              <Stack.Screen name="CartScreen">
                {
                  ({navigation}) => {notificador.setNavegador(navigation); 
                  return(<CartScreen navegador={navigation} />)}
                }
              </Stack.Screen>
  
  
          </Stack.Navigator>
        </NavigationContainer>
      )
    }
  }


