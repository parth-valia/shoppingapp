import {AppNavigator} from '@navigation';
import {CartContextProvider} from '@context';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {globalStyle} from '@styles';

const Root = () => {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: {x: 0, y: 0, width: 0, height: 0},
        insets: {top: 0, left: 0, right: 0, bottom: 0},
      }}>
      <View style={globalStyle.appContainer}>
        <CartContextProvider>
          <AppNavigator />
        </CartContextProvider>
      </View>
    </SafeAreaProvider>
  );
};

export default Root;
