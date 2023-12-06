import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';

import {CartContext} from '@context';
import Colors from '@styles/colors';
import {IconComponent} from '@components/IconComponent';
import PlusIcon from '../../assets/svg/plus.svg';
import SvgUri from 'react-native-svg-uri';
import {styles} from './style';

type ProductTileProps = {
  product: any;
  onProductPress: () => void;
  onAddToCartPress: () => void;
  onFavoritesPress?: () => void;
  isFavourite?: boolean;
};
export const ProductTileComponent: React.FC<ProductTileProps> = ({
  product,
  onProductPress,
  onAddToCartPress,
  onFavoritesPress,
  isFavourite,
}) => {
  const {favouriteData} = useContext(CartContext);
  const favourite = favouriteData.some(
    favouriteItem => favouriteItem.id === product?.id,
  );
  console.log(favouriteData);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onProductPress}>
      {!isFavourite && (
        <TouchableOpacity
          style={styles.favouriteContainer}
          onPress={onFavoritesPress}>
          <IconComponent
            iconName={favourite ? 'heart' : 'hearto'}
            iconType="antdesign"
            iconSize={15}
            iconColor={favourite ? Colors.light_red : Colors.black}
          />
        </TouchableOpacity>
      )}
      <Image source={{uri: product?.thumbnail}} style={styles.imageStyle} />
      <View style={styles.detailsContainer}>
        <Text style={styles.priceTextStyle}>{`$${product?.price}`}</Text>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.productTextStyle}>
          {product?.title}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.addToCartContainer}
          onPress={onAddToCartPress}>
          <SvgUri source={PlusIcon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
