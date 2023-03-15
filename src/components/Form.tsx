import React, { FunctionComponent, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picker } from './index';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
})

const Form: FunctionComponent = () => {
  const [activeDial, setActiveDial] = useState('DE');

  const handleValueChange = (dial: string) => {
    setActiveDial(dial)
  }

  const mockValues = [
    {
      value: 0,
      label: '+49'
    },
    {
      value: 1,
      label: '+2341324'
    },
    {
      value: 2,
      label: '+934'
    },
    {
      value: 3,
      label: '+234'
    },
    {
      value: 4,
      label: '+98'
    },
  ]
  return (
    <View style={styles.formContainer}>
      <Picker values={mockValues} onValueChange={handleValueChange} />
      <Text>{activeDial}</Text>
    </View>
  );
}

export default Form;
