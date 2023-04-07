import React, { FunctionComponent } from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';
import colors from './colors';

import { friends, rightArrow, leftArrow, externalArrow } from './icons/IconSummary';

export const ICONS = {
  'friends': friends,
  'right-arrow': rightArrow,
  'left-arrow': leftArrow,
  'external-arrow': externalArrow,
};

export type Icon = keyof typeof ICONS;

export interface IconProps {
  icon: keyof typeof ICONS;
  size?: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
}

class DefaultIconProps implements IconProps {
  icon: Icon = 'friends';
  size: number = 19;
  color: string = colors.midnightBlack;
  iconStyle: StyleProp<TextStyle> = {};
}

const Icon: FunctionComponent<IconProps> = (props) => {
  const mergedProps = { ...new DefaultIconProps(), ...props };

  const icon = ICONS[props.icon];

  const dimension = `width="${mergedProps.size}" height="${mergedProps.size}"`;
  const color = `fill="${mergedProps.color}"`;

  const content = `
    <svg ${dimension} ${color} viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
       ${icon} 
    </svg>`
  return (
    <SvgXml style={props.iconStyle} xml={content} />
  )
}

export const PressableIcon: FunctionComponent<IconProps & { onPress: () => void }> = (props) => {

  const { onPress, ...rest } = props;

  return <Pressable onPress={onPress}>
    <Icon {...rest}></Icon>
  </Pressable>;
}

export default Icon;