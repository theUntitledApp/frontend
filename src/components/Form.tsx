import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Picker, RegularText } from './index';
import { dialValues } from '../constants/GlobalConstants';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
})

const Form: FunctionComponent = () => {
  const [activeDial, setActiveDial] = useState('DE');

  const handleValueChange = (dial: string) => {
    setActiveDial(dial);
  }

  // mockValues shall be replaced with an API or more detailed

  return (
    <View style={styles.formContainer}>
      <Picker values={dialValues} onValueChange={handleValueChange} />
      <RegularText>{activeDial}</RegularText>
    </View>
  );
}

export default Form;
