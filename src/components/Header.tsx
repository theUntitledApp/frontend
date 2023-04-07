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
    rotate?: number,
    navigateTo: RootStackRoute,
  }
  title: string;
}


//TODO Center of Text is not 100% Accurate look into it

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerNoIcons: {
    justifyContent: "center",
  },
  headerWithLeftIcon: {
    justifyContent: "flex-start",
  },
  headerWithRightIcon: {
    justifyContent: "flex-end",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
})

const Header: FunctionComponent<HeaderProps> = (props) => {
  const iconSize = 19;
  const iconColor = colors.midnightBlack;
  const hasLeftIcon = !!props.leftIcon;
  const hasRightIcon = !!props.rightIcon;
  const hasIcons = hasLeftIcon || hasRightIcon;

  const styleArray = [
    styles.headerContainer,
    !hasIcons && styles.headerNoIcons,
    hasLeftIcon && styles.headerWithLeftIcon,
    hasRightIcon && styles.headerWithRightIcon,
  ]

  return (
    <View style={styleArray}>
      {props.leftIcon && <Icon icon={'left-arrow'} size={iconSize} color={iconColor} />}
      <View style={styles.titleContainer}>
        <Headline level={'h2'}>{props.title}</Headline >
      </View>
      {props.rightIcon && <Icon size={iconSize} icon={'right-arrow'} color={iconColor} />}
    </View>
  )
}

export default Header;
