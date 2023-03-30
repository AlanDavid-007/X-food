import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from 'react-navigation';
import { notificationManager } from '../../../components/NotificationHandler';
const notificador = notificationManager;
export default class OnBoardScreen extends Component { 

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
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 300}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -150,
          }}
          source={require('../../assets/onboardImage.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center'}}>
            Comida Deliciosa
          </Text>
          <Text
            style={{
              marginTop: 30,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
              marginBottom: 20,
            }}>
            Nós te ajudamos a encontrar uma comida incrível!
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton 
           onPress={ () =>
            this.props.navigation.navigate('HomeScreen', {})}
         title="Venha Conhecer!"
        />
        <Text></Text>
        <PrimaryButton title="Receber novidades" onPress={ () => this.agendar()}></PrimaryButton>
      </View>
    </SafeAreaView>
    );
};
}

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
    marginTop: 100,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

