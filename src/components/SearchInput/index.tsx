import {Keyboard, TextInput, View} from 'react-native';

import Colors from '@styles/colors';
import React from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import SvgUri from 'react-native-svg-uri';
import {styles} from './style';

type SearchInputProps = {
  value: string;
  placeholder?: string;
  onChangeText: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};
export const SearchInputComponent: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
}) => {
  return (
    <View style={styles.searchInputContainer}>
      <SvgUri source={SearchIcon} />
      <TextInput
        style={styles.textInputStyle}
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        blurOnSubmit={false}
        placeholderTextColor={Colors.hit_gray}
        onSubmitEditing={() => Keyboard.dismiss()}
      />
    </View>
  );
};
