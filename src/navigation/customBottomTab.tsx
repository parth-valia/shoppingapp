import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {globalStyle, globalTextStyles} from '@styles';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import CategoryFilledIcon from '../assets/svg/category-filled.svg';
import CategoryIcon from '../assets/svg/category.svg';
import FavouriteFilledIcon from '../assets/svg/heart-filled.svg';
import FavouriteIcon from '../assets/svg/heart.svg';
import HomeFilledIcon from '../assets/svg/home-filled.svg';
import HomeIcon from '../assets/svg/home.svg';
import MoreFilledIcon from '../assets/svg/more-filled.svg';
import MoreIcon from '../assets/svg/more.svg';
import React from 'react';
import {Strings} from '@constants';
import SvgUri from 'react-native-svg-uri';

export const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const tabBarHeight = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateY: tabBarHeight.value}],
    alignItems: 'center',
  }));

  return (
    <SafeAreaView style={globalStyle.tabBarContainer}>
      {state.routes.map((route, index) => {
        const selected = state.index === index;
        let icon;
        switch (route.name) {
          case Strings.HOME:
            icon = selected ? HomeFilledIcon : HomeIcon;
            break;
          case Strings.CATEGORY:
            icon = selected ? CategoryFilledIcon : CategoryIcon;
            break;
          case Strings.FAVOURITE:
            icon = selected ? FavouriteFilledIcon : FavouriteIcon;
            break;
          case Strings.MORE:
            icon = selected ? MoreFilledIcon : MoreIcon;
            break;
          default:
            icon = HomeIcon;
            break;
        }
        return (
          <TouchableOpacity
            style={
              selected
                ? globalStyle.selectedTabContainer
                : globalStyle.tabContainer
            }
            onPress={() => {
              navigation.navigate(route.name);
            }}
            key={index}>
            <Animated.View style={animatedStyle}>
              <SvgUri source={icon} />
              {!selected && (
                <Text style={globalTextStyles.tabItemText}>{route?.name}</Text>
              )}
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};
