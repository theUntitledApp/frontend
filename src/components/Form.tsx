import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TPickerValue } from './Picker/PickerTypes';

import { Picker, RegularText } from './index';
import { dialValues } from '../constants/GlobalConstants';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  }
})

const Form: FunctionComponent = () => {
  const [activeDial, setActiveDial] = useState<TPickerValue>({ value: 0, label: 'DE' });

  const handleValueChange = (value: TPickerValue) => {
    setActiveDial(value);
  }

  return (
    <View style={styles.formContainer}>
      <Picker values={dialValues} onValueChange={handleValueChange} value={activeDial} />
      <RegularText>Hello {activeDial.label}</RegularText>
    </View>
  );
}

export default Form;
