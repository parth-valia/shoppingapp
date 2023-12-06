import {CategoryScreen} from '@screens';
import {CategoryStackParamList} from './stack-param-list';
import Colors from '@styles/colors';
import {ROUTES} from '@constants';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<CategoryStackParamList>();
type CategoryStackProps = {};

export const CategoryStack: React.FC<CategoryStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Colors.white},
      }}>
      <Stack.Screen
        name={ROUTES.CATEGORY_SCREEN}
        component={CategoryScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
