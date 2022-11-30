import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';
import {PrimaryButton} from '../components/Button';
import cartlist from '../../consts/cartList';
import { v4 as uuidv4 } from 'uuid';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
//Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppLoading from 'expo-app-loading';

const CartScreen = ({navigation, item}) => {

  const [ready, setReady] = useState(false);
  const [addCartList, setAddCartList] = useState([cartlist]);
  
  
    const AddCartItems = (cart) => {
    const newCartItem = [...cartlist, cart];
    
    AsyncStorage.setItem("storedCartList", JSON.stringify(newCartItem)).then(() => {
            setAddCartList(newCartItem);
        }).catch((error) => console.log(error));
            console.log(setAddCartList(newCartItem));
  
  };
  
  const loadCartlist = ({item}) => {
      AsyncStorage.getItem("storedCartList").then(data => {
        if (data !== null) {
          setAddCartList(JSON.parse(data))
        }
      }).catch((error) => console.log(error));
    };

    if (!ready) {
      return (
        <AppLoading
          startAsync={loadCartlist}
          onFinish={() => setReady(true)}
          onError={console.warn}
        />
      )
    };

//     {item}
    
    let [count, setCount] = useState(1);
    let min = 0; /// min number
    let max = 30; /// max number

  function incrementCount() {
    count = count + 1;
   if(count >= 1 && count < 100) {
    setCount(count);
   }
  };

  function decrementCount() {
    count = count - 1;
    if(count > 1 && count < 100) {
    setCount(count);
   } 
  };

//Editing a todo
    const [itemToBeEdited, setItemToBeEdited] = useState(null);

    const handleTriggerEdit = (item) => {
        setItemToBeEdited(item);
    };

    const handleEditItem = (editedItem) => {
        const newItems = [...cartlist];
        const itemIndex = cartlist.findIndex((item) => item.id === editedItem.id);
        newItems.splice(itemIndex, 1, editedItem);
        AsyncStorage.setItem("storedCartList", JSON.stringify( newItems)).then(() => {
            setAddCartList(newItems);
            setItemToBeEdited(null);
            // console.log(todoIndex);
        }).catch((error) => console.log(error));
    };

    const editItem = () => {
     handleEditItem({
          id: uuidv4(),
          name: item.name,
          image: item.image,
          ingredients: item.ingredients,
          price: item.price,
          quantity: count,
     });
    };

    const checkoutBtn = () => {
     alert("Obrigado por comprar conosco!");
    };

  const CartCard = () => {
    return (
      <ScrollView>
        {cartlist.map((cart, index) => (
      <View style={style.cartCard} key={index}>
        <Image source={cart.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{cart.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {cart.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${cart.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
{/* //           <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text> */}
            <span>{count}</span>
        <button style={style.actionBtn} onPress={() => {decrementCount(), editItem()}}>
            <Icon name="remove" size={25} color={COLORS.white} />
          </button>
        <button style={style.actionBtn} onPress={() => {incrementCount(), editItem()}}>
        <Icon name="add" size={25} color={COLORS.white} />
         </button>
         </View>
      </View>
    ))}
    </ScrollView>
    )};
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <PrimaryButton title="CHECKOUT" onClick={checkoutBtn}/>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CartScreen;
