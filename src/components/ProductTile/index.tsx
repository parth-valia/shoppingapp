import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import Colors from '@styles/colors';
import {IconComponent} from '@components/IconComponent';
import PlusIcon from '../../assets/svg/plus.svg';
import SvgUri from 'react-native-svg-uri';
import {styles} from './style';

type ProductTileProps = {
  product: any;
  onProductPress: () => void;
  onAddToCartPress: () => void;
};
export const ProductTileComponent: React.FC<ProductTileProps> = ({
  product,
  onProductPress,
  onAddToCartPress,
}) => {
  const [favourite, setFavourite] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onProductPress}>
      <TouchableOpacity
        style={styles.favouriteContainer}
        onPress={() => {
          setFavourite(!favourite);
        }}>
        <IconComponent
          iconName={favourite ? 'heart' : 'hearto'}
          iconType="antdesign"
          iconSize={15}
          iconColor={favourite ? Colors.light_red : Colors.black}
        />
      </TouchableOpacity>
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
