import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import Colors from '@styles/colors';
import {styles} from './style';

const data = [
  {
    id: 1,
    title: 'Image 1',
    image:
      'https://images.unsplash.com/photo-1682687220945-922198770e60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Image 2',
    image:
      'https://plus.unsplash.com/premium_photo-1680667682187-52fd5e203efb?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Image 3',
    image:
      'https://images.unsplash.com/photo-1701600713431-01e520efca61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8',
  },
];

export const CarouselComponent: React.FC<{
  itemWidth: number;
  sliderWidth: number;
  data: any[];
  isProduct?: boolean;
}> = ({itemWidth, sliderWidth, data, isProduct}) => {
  const [index, setIndex] = useState(0);
  console.log(data, 'datattt');
  return (
    <View style={styles.container}>
      <Carousel
        data={data}
        activeSlideAlignment="start"
        renderItem={({item}) => (
          <View style={isProduct ? styles.productSlide : styles.slide}>
            <Image
              style={isProduct ? styles.productImage : styles.image}
              source={isProduct ? {uri: item} : item?.image}
            />
          </View>
        )}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        onSnapToItem={index => setIndex(index)}
      />
      {isProduct && (
        <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={data.length}
            activeDotIndex={index}
            dotStyle={styles.dotStyle}
            dotColor={Colors.dark_yellow}
            inactiveDotColor={Colors.dark_gray}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.5}
            tappableDots={true}
          />
        </View>
      )}
    </View>
  );
};
