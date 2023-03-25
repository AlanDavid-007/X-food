import React from 'react';
import {Text, StyleSheet, View, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const OnBoardScreen = ({navigation}) => {
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
          onPress={() => navigation.navigate('Home')}
          title="Venha Conhecer!"
        />
        <Button title="Receber novidades" onPress={ () => props.agendar()}></Button>
      </View>
    </SafeAreaView>
  );
};

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

export default OnBoardScreen;
