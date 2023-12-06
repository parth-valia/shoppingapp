import {BottomTabScreens} from './primary-stack';
import {CategoryStack} from './category-stack';
import Colors from '@styles/colors';
import {FavouriteStack} from './favourite-stack';
import {HomeStack} from './home-stack';
import {MoreStack} from './more-stack';
import {NavigationContainer} from '@react-navigation/native';
import {ROUTES} from '@constants';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {backgroundColor: Colors.white},
        }}>
        <Stack.Screen name={ROUTES.BOTTOM_TAB} component={BottomTabScreens} />
        <Stack.Screen name={ROUTES.HOME_STACK} component={HomeStack} />
        <Stack.Screen name={ROUTES.CATEGORY_STACK} component={CategoryStack} />
        <Stack.Screen
          name={ROUTES.FAVOURITE_STACK}
          component={FavouriteStack}
        />
        <Stack.Screen name={ROUTES.MORE_STACK} component={MoreStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
