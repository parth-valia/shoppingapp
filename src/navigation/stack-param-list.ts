import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: NativeStackNavigationProp<HomeStackParamList, T>;
  route: RouteProp<HomeStackParamList, T>;
};

export type HomeStackParamList = {
  HomeScreen: {
    state: string | undefined;
  };
  ProductDetailsScreen: {
    state: string | undefined;
  };
  CartScreen: {
    state: string | undefined;
  };
};

export type CategoryStackNavProps<T extends keyof CategoryStackParamList> = {
  navigation: NativeStackNavigationProp<CategoryStackParamList, T>;
  route: RouteProp<CategoryStackParamList, T>;
};

export type CategoryStackParamList = {
  CategoryScreen: {
    state: string | undefined;
  };
};

export type FavouriteStackNavProps<T extends keyof FavouriteStackParamList> = {
  navigation: NativeStackNavigationProp<FavouriteStackParamList, T>;
  route: RouteProp<FavouriteStackParamList, T>;
};

export type FavouriteStackParamList = {
  FavouriteScreen: {
    state: string | undefined;
  };
};

export type MoreStackNavProps<T extends keyof MoreStackParamList> = {
  navigation: NativeStackNavigationProp<MoreStackParamList, T>;
  route: RouteProp<MoreStackParamList, T>;
};

export type MoreStackParamList = {
  MoreScreen: {
    state: string | undefined;
  };
};
