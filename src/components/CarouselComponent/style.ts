import {Dimensions, StyleSheet, sc} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  slide: {
    width: '85%',
    height: 123,
    borderRadius: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
  productSlide: {width: '100%', height: 200, marginVertical: 20},
  image: {
    width: 280,
    height: 123,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 200,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 20,
    height: 7,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
  },
});
