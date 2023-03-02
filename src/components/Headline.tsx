import React, { FunctionComponent, ReactNode } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { colors } from './colors';

export type HeadlineProps = {
  level: string;
  children: ReactNode;
}



const styles = StyleSheet.create({
  basicDisplay: {
    color: colors.primary,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
  displayOne: {
    fontSize: 32,
  },
  displayTwo: {
    fontSize: 24,
  },
  displayThree: {
    fontSize: 16,
  }
})

const Headline: FunctionComponent<HeadlineProps> = (props) => {
  const basicStyling = styles.basicDisplay;
  const displayStylings: any = {
    'h1': styles.displayOne,
    'h2': styles.displayTwo,
    'h3': styles.displayThree,
  }
  const styleExists = displayStylings.hasOwnProperty(props.level);
  const additionalStyling = styleExists ? displayStylings[props.level] : '';

  const headlineStyling = [
    basicStyling,
    additionalStyling
  ];

  return <Text style={headlineStyling}>{props.children}</Text>
}

export default Headline;
