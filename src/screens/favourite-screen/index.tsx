import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {CartContext} from '@context';
import {ProductTileComponent} from '@components';
import {ROUTES} from '@constants';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export const FavouriteScreen: React.FC<{}> = ({}) => {
  const {favouriteData, cartData, setCartData} = useContext(CartContext);
  const navigation = useNavigation();
  const handleAddToCart = (item: any) => {
    Object.assign(item, {
      quantity: item?.quantity > 0 ? item?.quantity + 1 : 1,
    });
    setCartData([...cartData, item]);
    navigation.navigate(ROUTES.HOME_STACK, {
      screen: ROUTES.CART_SCREEN,
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.productContainer}>
        <Text style={styles.productTitleTextStyle}>Favourites</Text>
        <FlatList
          data={favouriteData}
          numColumns={2}
          contentContainerStyle={styles.productListContainer}
          renderItem={({item}) => (
            <ProductTileComponent
              product={item}
              isFavourite={true}
              onAddToCartPress={() => {
                handleAddToCart(item);
              }}
              onProductPress={() => {
                navigation.navigate(ROUTES.HOME_STACK, {
                  screen: ROUTES.PRODUCT_DETAILS_SCREEN,
                  params: item,
                });
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};
