import {CartTileComponent, HeaderComponent} from '@components';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';

import {CartContext} from '@context';
import {styles} from './style';

export const CartScreen: React.FC<{}> = ({}) => {
  const {cartData, setCartData} = useContext(CartContext);

  const increaseQuantity = item => {
    const index = cartData.findIndex(cartItem => cartItem.id === item.id);
    if (index >= 0) {
      const updatedCart = [...cartData];
      updatedCart[index].quantity += 1;
      setCartData(updatedCart);
    }
  };

  const decreaseQuantity = item => {
    const index = cartData.findIndex(cartItem => cartItem.id === item.id);
    if (index >= 0) {
      let updatedCart = [...cartData];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart = updatedCart.filter(
          cartItem => cartItem.id !== updatedCart[index].id,
        );
      }
      setCartData(updatedCart);
    }
  };

  const total = cartData.reduce(
    (total, item) => total + item?.quantity * item?.price,
    0,
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <HeaderComponent />
      <FlatList
        data={cartData}
        ItemSeparatorComponent={() => (
          <View style={styles.itemSeparatorContainer} />
        )}
        renderItem={({item}) => (
          <CartTileComponent
            item={item}
            onIncreasePress={() => {
              increaseQuantity(item);
            }}
            onDecreasePress={() => {
              decreaseQuantity(item);
            }}
          />
        )}
      />
      <View style={styles.checkoutContainer}>
        <View style={styles.priceTextConatiner}>
          <Text style={styles.totalTextStyle}>Subtotal</Text>
          <Text style={styles.priceTextStyle}>{`$${total}`}</Text>
        </View>
        <View style={styles.priceTextConatiner}>
          <Text style={styles.totalTextStyle}>Delivery</Text>
          <Text style={styles.priceTextStyle}>
            {total > 0 ? '$2.00' : '$0.00'}
          </Text>
        </View>
        <View style={styles.priceTextConatiner}>
          <Text style={styles.totalTextStyle}>Total</Text>
          <Text style={styles.totalpriceTextStyle}>{`$${
            total > 0 ? total + 2.0 : 0.0
          }`}</Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButtonContainer}
          onPress={() => {}}>
          <Text style={styles.checkoutButtonTextStyle}>
            Proceed To checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
