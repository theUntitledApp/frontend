import React, { FunctionComponent } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { colors } from '../colors';
import { TextProps } from './types';

const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 15,
    color: colors.primary,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  }
})

const BoldText: FunctionComponent<TextProps> = (props) => {
  return <View style={props.textStyles}><Text style={styles.fontStyle}>{props.children}</Text></View>;
}

export default BoldText;
