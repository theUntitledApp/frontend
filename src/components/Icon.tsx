import React, { FunctionComponent, useState } from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/core';

import { friends, rightArrow, leftArrow, externalArrow } from './icons/IconSummary';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams, RootStackRoute } from '../screens/rootStacks';


export type IconProps = {
  iconProps: {
    icon: string;
    link?: string;
    navigateTo?: RootStackRoute;
  }
  size: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
}



const Icon: FunctionComponent<IconProps> = (props) => {
  const [invalidLink, setInvalidLink] = useState(false)

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dimension = `width="${props.size}" height="${props.size}"`;
  const color = `fill="${props.color ? props.color : 'none'}"`;
  const icon = props.iconProps;

  const icons: any = {
    'friends': friends,
    'right-arrow': rightArrow,
    'left-arrow': leftArrow,
    'external-arrow': externalArrow,
  }

  const handlePress = () => {

    const externalRoute = icon.link !== undefined ? icon.link : setInvalidLink(true);
    const internalRoute = icon.navigateTo !== undefined ? (invalidLink === false ? icon.navigateTo : 'Home') : 'Home';

    // href to icon.link
    invalidLink ? navigation.navigate(internalRoute) : navigation.navigate(internalRoute);
  }

  const iconExists = icons.hasOwnProperty(icon.icon);
  const contentIcon = iconExists ? icons[icon.icon] : icons['friends'];

  const content = `
    <svg ${dimension} ${color} viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
       ${contentIcon} 
    </svg>
`
  // dirty solution TODO: Change
  if (icon.navigateTo || icon.link) {
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
