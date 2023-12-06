import Colors from '@styles/colors';
import {Fonts} from '@constants/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonContainer: {
    backgroundColor: Colors.mystic,
    padding: 10,
    width: 40,
    alignItems: 'center',
    borderRadius: 20,
  },
  cartItemContainer: {
    backgroundColor: Colors.yellow,
    alignItems: 'center',
    borderRadius: 10,
    position: 'absolute',
    paddingHorizontal: 4,
    zIndex: 20,
    right: -5,
    top: -5,
  },
  cartItemTextStyle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.white,
  },
  cartTextStyle: {
    fontFamily: Fonts.MANROPE_REGULAR,
    marginLeft: 30,
    fontSize: 16,
  },
});
