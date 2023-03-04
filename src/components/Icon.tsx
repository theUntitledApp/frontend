import React, { FunctionComponent } from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';

import { friends } from './icons/IconSummary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams, RootStackRoute } from '../screens/rootStacks';


export type IconProps = {
  iconProps: {
    icon: string;
    navigateTo?: RootStackRoute;
  }
  size: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
  clickable?: boolean;
}



const Icon: FunctionComponent<IconProps> = (props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dimension = `width="${props.size}" height="${props.size}"`;
  const color = `fill="${props.color ? props.color : 'none'}"`;
  const icon = props.iconProps;

  const icons: any = {
    'friends': friends,
  }

  const handlePress = () => {
    const route = icon.navigateTo !== undefined ? icon.navigateTo : 'Welcome';
    navigation.navigate(route);
  }

  const iconExists = icons.hasOwnProperty(icon.icon);
  const contentIcon = iconExists ? icons[icon.icon] : icons['friends'];

  const content = `
    <svg ${dimension} ${color} viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
     ${contentIcon} 
    </svg>
`
  if (icon.navigateTo) {
    return (
      <TouchableOpacity onPress={handlePress}>
        <SvgXml style={props.iconStyle} xml={content} />
      </TouchableOpacity>
    )
  }
  return (
    <SvgXml style={props.iconStyle} xml={content} />
  )
}

export default Icon;
