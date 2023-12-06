import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import BagIcon from '../../assets/svg/bag-black.svg';
import {CartContext} from '@context';
import Colors from '@styles/colors';
import {IconComponent} from '@components/IconComponent';
import {ROUTES} from '@constants';
import SvgUri from 'react-native-svg-uri';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

type HeaderProps = {
  isProduct?: boolean;
};
export const HeaderComponent: React.FC<HeaderProps> = ({isProduct}) => {
  const navigation = useNavigation();
  const {cartData} = useContext(CartContext);
  return (
    <View style={isProduct ? styles.container : styles.cartContainer}>
      <TouchableOpacity
        style={styles.backButtonContainer}
        onPress={() => {
          navigation.goBack();
        }}>
        <IconComponent
          iconName="left"
          iconType="antdesign"
          iconSize={20}
          iconColor={Colors.dark_gray}
        />
      </TouchableOpacity>
      {!isProduct && (
        <Text
          style={
            styles.cartTextStyle
          }>{`Shopping Cart (${cartData?.length})`}</Text>
      )}
      {isProduct && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(ROUTES.CART_SCREEN);
          }}>
          <View style={styles.cartItemContainer}>
            <Text style={styles.cartItemTextStyle}>{cartData?.length}</Text>
          </View>
          <View>
            <SvgUri source={BagIcon} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};
