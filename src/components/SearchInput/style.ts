import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  searchInputContainer: {
    backgroundColor: Colors.dark_blue,
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 24,
    marginHorizontal: 20,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  textInputStyle: {
    marginHorizontal: 20,
    color: Colors.white,
    fontFamily: Fonts.MANROPE_REGULAR,
  },
});
