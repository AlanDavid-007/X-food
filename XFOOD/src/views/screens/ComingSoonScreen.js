import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import comingSoon from '../../consts/comingSoon';
import foods from '../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import {Entypo} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

const ComingSoonScreen = ({navigation}) => {
  const [selectedComingSoonIndex, setSelectedComingSoonIndex] = React.useState(0);

  // const ListComings = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={style.categoriesListContainer}>
  //       {comingSoon.map((coming, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setSelectedComingSoonIndex(index)}>
  //           <View
  //             style={{
  //               backgroundColor:
  //                 selectedComingSoonIndex == index
  //                   ? COLORS.primary
  //                   : COLORS.secondary,
  //               ...style.categoryBtn,
  //             }}>
  //             <View style={style.categoryBtnImgCon}>
  //               <Image
  //                 source={coming.image}
  //                 style={{height: 35, width: 35, resizeMode: 'cover'}}
  //               />
  //             </View>
  //             <Text
  //               style={{
  //                 fontSize: 15,
  //                 fontWeight: 'bold',
  //                 marginLeft: 10,
  //                 color:
  //                   selectedComingSoonIndex == index
  //                     ? COLORS.white
  //                     : COLORS.primary,
  //               }}>
  //               {coming.name}
  //             </Text>
  //           </View>
  //         </TouchableOpacity>
  //       ))}
  //     </ScrollView>
  //   );
  // };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={food.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <AntDesign name="plus" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Hello,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Alan
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            What do you want today
          </Text>
        </View>
        <Image
          source={require('../../assets/person.jpeg')}
          style={{height: 50, width: 50, borderRadius: 25}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputContainer}>
          <Fontisto name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        {/* <View style={style.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View> */}
      </View>
      {/* <View>
        <ListComings />
      </View> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComingSoonScreen;
