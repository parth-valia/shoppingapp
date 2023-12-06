import {CategoryStack} from './category-stack';
import {FavouriteStack} from './favourite-stack';
import {HomeStack} from './home-stack';
import {MoreStack} from './more-stack';
import React from 'react';
import {Strings} from '@constants';
import {TabBar} from './customBottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export const BottomTabScreens: React.FC<{}> = ({}) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name={Strings.HOME} component={HomeStack} />
      <Tab.Screen name={Strings.CATEGORY} component={CategoryStack} />
      <Tab.Screen name={Strings.FAVOURITE} component={FavouriteStack} />
      <Tab.Screen name={Strings.MORE} component={MoreStack} />
    </Tab.Navigator>
  );
};
