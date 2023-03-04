import React, { FunctionComponent, useState, ReactNode } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import colors from './colors';
import { Icon, Headline } from './index';

export type HeaderProps = {
  leftIcon?: {
    icon: string,
    navigateTo: string,
  }
  rightIcon?: string,
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
  const iconClickable = true;
  const iconLeft = props.leftIcon ? <Icon iconStyle={styles.icon} size={iconSize} icon={props.leftIcon} color={iconColor} navigateTo={props.navigateTo} /> : <View />;
  const iconRight = props.rightIcon ? <Icon size={iconSize} icon={props.rightIcon} color={iconColor} /> : <View />;

  return (
    <View style={styles.header}>
      {iconLeft}
      <Headline level={'h2'}>{props.title}</Headline >
      {iconRight}
    </View>
  )
}

export default Header;
