import Colors from '@styles/colors';
import {MoreScreen} from '@screens';
import {MoreStackParamList} from './stack-param-list';
import {ROUTES} from '@constants';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<MoreStackParamList>();
type MoreStackProps = {};

export const MoreStack: React.FC<MoreStackProps> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: Colors.white},
      }}>
      <Stack.Screen name={ROUTES.MORE_SCREEN} component={MoreScreen} />
    </Stack.Navigator>
  );
};
