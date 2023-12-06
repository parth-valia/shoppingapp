import Colors from '@styles/colors';
import Icon from 'react-native-easy-icon';
import {IconType} from 'react-native-easy-icon/src/Icon';
import React from 'react';
import {TextStyle} from 'react-native';

export const IconComponent: React.FC<{
  iconName: string;
  iconType: IconType;
  iconColor?: Colors;
  iconSize: number;
  iconStyle?: TextStyle | TextStyle[];
}> = ({iconName, iconType, iconColor = Colors.black, iconSize, iconStyle}) => {
  return (
    <Icon
      name={iconName}
      type={iconType}
      color={iconColor}
      size={iconSize}
      style={iconStyle}
    />
  );
};
