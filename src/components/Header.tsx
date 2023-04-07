import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import Headline from './Headline';

export type HeaderProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element; 
  title: string;
}

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
  const styleArray = [ styles.headerContainer, ];

  return (
    <View style={styleArray}>
      <>{props.leftIcon}</>
      <View style={styles.titleContainer}>
        <Headline level={'h2'}>{props.title}</Headline >
      </View>
      <>{props.rightIcon}</>
    </View>
  )
}

export default Header;
