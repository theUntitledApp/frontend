import React, { FunctionComponent } from 'react';
import { Text, StyleSheet } from 'react-native';

import { colors } from '../colors';
import { TextProps } from './types';

const styles = StyleSheet.create({
    fontStyle: {
        fontSize: 15,
        color: colors.primary,
        textAlign: 'left',
        fontFamily: 'Lato-Regular',
    }
})


const RegularText: FunctionComponent<TextProps> = (props) => {
    return <Text style={styles.fontStyle}>{props.children}</Text>;
}

export default RegularText;