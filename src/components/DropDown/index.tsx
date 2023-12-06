import {Text, TouchableOpacity, View} from 'react-native';

import Colors from '@styles/colors';
import {IconComponent} from '@components';
import React from 'react';
import {styles} from './style';

type DropDownProps = {
  title: string;
  selectedItem: string;
  onPress: () => void;
};

export const DropDownComponent: React.FC<DropDownProps> = ({
  title,
  selectedItem,
  onPress,
}) => {
  return (
    <View>
      <Text style={styles.titleTextStyle}>{title.toUpperCase()}</Text>
      <TouchableOpacity style={styles.selectedItemContainer} onPress={onPress}>
        <Text style={styles.selectedItemTextStyle}>{selectedItem}</Text>
        <IconComponent
          iconName="down"
          iconType="antdesign"
          iconSize={12}
          iconColor={Colors.mystic}
        />
      </TouchableOpacity>
    </View>
  );
};
