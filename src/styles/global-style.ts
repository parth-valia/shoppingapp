import Colors from '@styles/colors';
import {StyleSheet} from 'react-native';

export const globalStyle = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    backgroundColor: '#F8F7FB',
  },
  selectedTabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    borderRadius: 50,
    padding: 20,
    top: -20,
  },
  tabContainer: {alignItems: 'center', justifyContent: 'center'},
});
