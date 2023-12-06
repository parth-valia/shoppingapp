import {CartScreen, HomeScreen, ProductDetailsScreen} from '@screens';

import Colors from '@styles/colors';
import {HomeStackParamList} from './stack-param-list';
import {ROUTES} from '@constants';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<HomeStackParamList>();
type HomeStackProps = {};

export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
        headerShown: false,
      }}>
      <Stack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen name={ROUTES.CART_SCREEN} component={CartScreen} />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
