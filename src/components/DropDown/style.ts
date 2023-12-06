import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  titleTextStyle: {
    color: Colors.hit_gray,
    fontSize: 11,
    fontFamily: Fonts.MANROPE_REGULAR,
    fontWeight: '800',
  },
  selectedItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingBottom: 12,
  },
  selectedItemTextStyle: {
    color: Colors.white,
    fontFamily: Fonts.MANROPE_REGULAR,
    marginRight: 10,
  },
  dropDownMainContainer: {
    position: 'absolute',
    zIndex: 50,
    top: 60,
    shadowColor: Colors.dark_blue,
    shadowOpacity: 0.2,
  },
  dropDownListContainer: {
    borderRadius: 5,
  },
  itemSeparatorContainer: {backgroundColor: Colors.hit_gray, padding: 0.6},
  itemContainer: {
    backgroundColor: Colors.white,
    padding: 10,
    paddingHorizontal: 6,
  },
  itemTextStyle: {fontFamily: Fonts.MANROPE_REGULAR},
});
