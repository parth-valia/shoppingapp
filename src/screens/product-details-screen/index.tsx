import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext} from 'react';

import {CarouselComponent} from '@components/CarouselComponent';
import {CartContext} from '@context';
import Colors from '@styles/colors';
import {HeaderComponent} from '@components';
import {ROUTES} from '@constants';
import StarRating from 'react-native-star-rating-widget';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export const ProductDetailsScreen: React.FC<{route: any}> = ({route}) => {
  const {title, brand, description, discountPercentage, images, price, rating} =
    route?.params;
  const navigation = useNavigation();
  const {cartData, setCartData} = useContext(CartContext);
  const handleBuyProduct = () => {
    const item = route?.params;
    Object.assign(item, {
      quantity: item?.quantity > 0 ? item?.quantity + 1 : 1,
    });
    setCartData([...cartData, item]);
    navigation.navigate(ROUTES.CART_SCREEN);
  };
  return (
    <SafeAreaView>
      <HeaderComponent isProduct={true} />
      <View style={styles.container}>
        <Text
          style={styles.subTitleTextStyle}
          numberOfLines={1}
          ellipsizeMode="middle">
          {brand}
        </Text>
        <Text
          style={styles.titleTextStyle}
          numberOfLines={1}
          ellipsizeMode="middle">
          {title}
        </Text>
      </View>
      <View style={styles.ratingContainer}>
        <StarRating
          rating={rating}
          onChange={() => {}}
          starSize={23}
          color={Colors.dark_yellow}
        />
        <Text style={styles.ratingTextStyle}>{`${rating} Rating`}</Text>
      </View>
      <CarouselComponent
        data={images}
        itemWidth={Dimensions.get('screen').width}
        sliderWidth={Dimensions.get('screen').width}
        isProduct={true}
      />
      <View style={styles.priceContainer}>
        <Text style={styles.priceTextStyle}>{`$${price}`}</Text>
        <View style={styles.discountContainer}>
          <Text
            style={
              styles.discountTextStyle
            }>{`${discountPercentage}% OFF`}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addToCartContainer}
          onPress={handleBuyProduct}>
          <Text style={styles.addToCartTextStyle}>Add To Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buyNowContainer}
          onPress={handleBuyProduct}>
          <Text style={styles.buyNowTextStyle}>Buy Now</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.DetailsContainer}>
        <Text style={styles.DetailsTitleTextStyle}>Details</Text>
        <Text style={styles.DetailsTextStyle}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};
