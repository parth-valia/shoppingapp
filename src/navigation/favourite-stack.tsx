import Colors from '@styles/colors';
import {FavouriteScreen} from '@screens';
import {FavouriteStackParamList} from './stack-param-list';
import {ROUTES} from '@constants';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<FavouriteStackParamList>();
type FavouriteStackProps = {};

export const FavouriteStack: React.FC<FavouriteStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.white},
      }}>
      <Stack.Screen
        name={ROUTES.FAVOURITE_SCREEN}
        component={FavouriteScreen}
      />
    </Stack.Navigator>
  );
};
