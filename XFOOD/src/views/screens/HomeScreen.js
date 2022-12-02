import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import {AddCartItems} from './CartScreen.js';
import foods from '../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import {Entypo} from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import filter from 'lodash.filter';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

// Arrumar UUID para gerar id 
  


const HomeScreen = ({navigation, item, food}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);
  
 const [categoriesValue, setCategoriesValue] = useState([categories]);
 const [query, setQuery] = useState("");
const [fullData, setFullData] = useState([]);
  // const ListCategories = () => {
  //   return (
  //     <ScrollView
  //       horizontal
  //       showsHorizontalScrollIndicator={false}
  //       contentContainerStyle={style.categoriesListContainer}>
  //       {categoriesValue.map((category, index) => (
  //         <TouchableOpacity
  //           key={index}
  //           activeOpacity={0.8}
  //           onPress={() => setSelectedCategoryIndex(index)}>
  //           <View
  //             style={{
  //               backgroundColor:
  //                 selectedCategoryIndex == index
  //                   ? COLORS.primary
  //                   : COLORS.secondary,
  //               ...style.categoryBtn,
  //             }}>
  //            <TouchableOpacity>
  //             <View style={style.categoryBtnImgCon}>
  //               <Image
  //                 source={category.image}
  //                 style={{height: 35, width: 35, resizeMode: 'cover'}}
  //               />
  //             </View>
  //            </TouchableOpacity>
  //             <Text
  //               style={{
  //                 fontSize: 15,
  //                 fontWeight: 'bold',
  //                 marginLeft: 10,
  //                 color:
  //                   selectedCategoryIndex == index
  //                     ? COLORS.white
  //                     : COLORS.primary,
  //               }}>
  //               {category.name}
  //             </Text>
  //           </View>
  //         </TouchableOpacity>
  //       ))}
  //     </ScrollView>
  //   );
  // };
  const Card = ({food}) => {

      const Submit = () => {
        AddCartItems({
          "id": food.id,
          "name": food.name,
          "image": food.image,
          "ingredients": food.ingredients,
          "price": food.price,
        })
      };

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
          <TouchableOpacity onPress={Submit}>
            <View style={style.addToCartBtn}>
              <Entypo name="plus" size={20} color={COLORS.white} />
            </View>
          </TouchableOpacity>
          </View>
        </View>
      </TouchableHighlight>
    );
  };

  // Arrumar metódo de verificação para filtrar lista
  const handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(fullData, food => {
      return contains(food, formattedQuery);
    });
    setQuery(text);
    if (food.name == query) {
      setFullData(filteredData);
    }
    // Alert.alert(
    //   "Message",
    //   query,
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
            <ScrollView>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 28}}>Olá,</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
              Alan
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 22, color: COLORS.grey}}>
            O que deseja hoje?
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
        <Fontisto name="search" size={24} color="black" />
          <TextInput
            style={{flex: 1, fontSize: 13}}
            placeholder="Procure sua comida aqui..."
            value={query}
            onChangeText={foodText => handleSearch(foodText)}
          />
        </View>
        {/* <View style={style.sortBtn}>
         <Entypo
   color={COLORS.white}
   name="menuunfold"
   size={40}
/> 
        </View> */}
      </View>
      {/* <View>
        <ListCategories />
      </View> */}
      
      {/* Trocar data para trocar */}
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
      </ScrollView>
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
    marginBottom: 30,
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

export default HomeScreen;
