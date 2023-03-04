import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { RootStackRoute } from '../screens/rootStacks';

import colors from './colors';
import { Icon, Headline } from './index';

export type HeaderProps = {
  leftIcon?: {
    icon: string,
    navigateTo: RootStackRoute,
  }
  rightIcon?: {
    icon: string,
    navigateTo: RootStackRoute,
  }
  title: string;
}



const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,

  },
  icon: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
  }
})

const Header: FunctionComponent<HeaderProps> = (props) => {
  const iconSize = 19;
  const iconColor = colors.beige;
  const iconLeft = props.leftIcon ? <Icon iconStyle={styles.icon} size={iconSize} iconProps={props.leftIcon} color={iconColor} /> : <View />;
  const iconRight = props.rightIcon ? <Icon size={iconSize} iconProps={props.rightIcon} color={iconColor} /> : <View />;

  return (
    <View style={styles.header}>
      {iconLeft}
      <Headline level={'h2'}>{props.title}</Headline >
      {iconRight}
    </View>
  )
}

export default Header;
