import {Image, Text, TouchableOpacity, View} from 'react-native';

import Colors from '@styles/colors';
import {IconComponent} from '@components';
import React from 'react';
import {styles} from './style';

type CartTileProps = {
  item: any;
  onIncreasePress: (item: any) => void;
  onDecreasePress: (item: any) => void;
};
export const CartTileComponent: React.FC<CartTileProps> = ({
  item,
  onIncreasePress,
  onDecreasePress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.thumbnail}} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.titleTextStyle}>{item?.title}</Text>
          <Text style={styles.priceTextStyle}>{`$${item?.price}`}</Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            onDecreasePress(item);
          }}>
          <IconComponent
            iconName="minus"
            iconType="antdesign"
            iconSize={20}
            iconColor={Colors.dark_gray}
          />
        </TouchableOpacity>
        <Text style={styles.quantityTextStyle}>{item?.quantity}</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            onIncreasePress(item);
          }}>
          <IconComponent
            iconName="plus"
            iconType="antdesign"
            iconSize={20}
            iconColor={Colors.dark_gray}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
