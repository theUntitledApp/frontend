import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { RegularText } from './index';
import { dialValues } from '../constants/GlobalConstants';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})

const Form: FunctionComponent = () => {
  const [activeDial, setActiveDial] = useState('DE');

  const handleValueChange = (dial: string) => {
    setActiveDial(dial);
  }

  return (
    <View style={styles.formContainer}>
      <RegularText>Hello {activeDial}</RegularText>
    </View>
  );
}

export default Form;
