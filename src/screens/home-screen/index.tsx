import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DropDownComponent,
  ProductTileComponent,
  SearchInputComponent,
} from '@components';
import {Images, ROUTES} from '@constants';
import React, {useContext, useEffect, useState} from 'react';

import BagIcon from '../../assets/svg/bag.svg';
import {CarouselComponent} from '@components/CarouselComponent';
import {CartContext} from '@context';
import Colors from '@styles/colors';
import SvgUri from 'react-native-svg-uri';
import axios from 'axios';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

export const HomeScreen: React.FC<{}> = ({}) => {
  const address = [
    {id: 1, value: 'Green Way 3000, Sylhet'},
    {id: 2, value: 'Banglore, India'},
    {id: 3, value: 'Surat, India'},
  ];
  const deliveryTime = [
    {id: 1, value: '1 Hour'},
    {id: 2, value: '2 Hours'},
    {id: 3, value: '3 Hours'},
  ];
  const cards = [
    {id: 1, image: Images.CARD},
    {id: 2, image: Images.CARD},
    {id: 3, image: Images.CARD},
  ];
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(address[0]?.value);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState(
    deliveryTime[0]?.value,
  );
  const [showAddressDropDown, setShowAddressDropDown] = useState(false);
  const [showDeliveryDropDown, setShowDeliveryDropDown] = useState(false);
  const [products, setProducts] = useState([]);

  const {cartData, setCartData} = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    try {
      axios.get('https://dummyjson.com/products').then(res => {
        console.log(res?.data, 'datatta');
        setProducts(res?.data?.products);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (item: any) => {
    Object.assign(item, {
      quantity: item?.quantity > 0 ? item?.quantity + 1 : 1,
    });
    setCartData([...cartData, item]);
    navigation.navigate(ROUTES.HOME_STACK, {
      screen: ROUTES.CART_SCREEN,
    });
  };

  return (
    <>
      <SafeAreaView style={{backgroundColor: Colors.blue}}>
        <StatusBar barStyle={'light-content'} />
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Hey, Rahul</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.HOME_STACK, {
                  screen: ROUTES.CART_SCREEN,
                });
              }}>
              <View style={styles.cartItemContainer}>
                <Text style={styles.cartItemTextStyle}>{cartData?.length}</Text>
              </View>
              <View>
                <SvgUri source={BagIcon} />
              </View>
            </TouchableOpacity>
          </View>
          <SearchInputComponent
            value={searchValue}
            onChangeText={value => {
              setSearchValue(value);
            }}
            placeholder={'Search Products or store'}
          />
          <View style={styles.dropDownContainer}>
            <DropDownComponent
              title={'Delivery to'}
              selectedItem={selectedPlace}
              onPress={() => {
                setShowAddressDropDown(!showAddressDropDown);
                setShowDeliveryDropDown(false);
              }}
            />
            <DropDownComponent
              title={'within'}
              selectedItem={selectedDeliveryTime}
              onPress={() => {
                setShowDeliveryDropDown(!showDeliveryDropDown);
                setShowAddressDropDown(false);
              }}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.mainContainer}>
          <CarouselComponent
            data={cards}
            itemWidth={300}
            sliderWidth={Dimensions.get('screen').width}
          />
          <View style={styles.productContainer}>
            <Text style={styles.productTitleTextStyle}>Recommended</Text>
            <FlatList
              data={products.filter(product =>
                product.title.toLowerCase().includes(searchValue.toLowerCase()),
              )}
              scrollEnabled={false}
              numColumns={2}
              contentContainerStyle={styles.productListContainer}
              renderItem={({item}) => (
                <ProductTileComponent
                  product={item}
                  onAddToCartPress={() => {
                    handleAddToCart(item);
                  }}
                  onProductPress={() => {
                    navigation.navigate(ROUTES.HOME_STACK, {
                      screen: ROUTES.PRODUCT_DETAILS_SCREEN,
                      params: item,
                    });
                  }}
                />
              )}
            />
          </View>
        </ScrollView>
        {showAddressDropDown && (
          <View style={styles.dropDownAddressMainContainer}>
            <FlatList
              data={address}
              style={styles.dropDownListContainer}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparatorContainer} />
              )}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setSelectedPlace(item.value);
                    setShowAddressDropDown(!showAddressDropDown);
                  }}
                  style={styles.itemContainer}>
                  <Text style={styles.itemTextStyle}>{item?.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        {showDeliveryDropDown && (
          <View style={styles.dropDownDeliveryMainContainer}>
            <FlatList
              data={deliveryTime}
              style={styles.dropDownListContainer}
              scrollEnabled={false}
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeparatorContainer} />
              )}
              renderItem={({item}) => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setSelectedDeliveryTime(item.value);
                    setShowDeliveryDropDown(!showDeliveryDropDown);
                  }}
                  style={styles.itemContainer}>
                  <Text style={styles.itemTextStyle}>{item?.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};
