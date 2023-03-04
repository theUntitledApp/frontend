import React, { FunctionComponent } from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import { friends } from './icons/IconSummary';
import RootStackParamList from '../screens/rootStackParamList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type IconProps = {
  icon: string;
  size: number;
  color?: string;
  iconStyle?: StyleProp<TextStyle>;
  clickable?: boolean;
  navigateTo?: any;
}


const Icon: FunctionComponent<IconProps> = (props) => {
  const navigation = useNavigation<NativeStackScreenProps<RootStackParamList>>();
  const dimension = `width="${props.size}" height="${props.size}"`;
  const color = `fill="${props.color ? props.color : 'none'}"`;

  const icons: any = {
    'friends': friends,
  }

  const handlePress = () => {
    navigation.navigate(props.navigateTo as any);
  }

  const iconExists = icons.hasOwnProperty(props.icon);
  const contentIcon = iconExists ? icons[props.icon] : icons['friends'];

  const content = `
    <svg ${dimension} ${color} viewBox="0 0 53 53" xmlns="http://www.w3.org/2000/svg">
     ${contentIcon} 
    </svg>
`
  if (props.clickable) {
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
