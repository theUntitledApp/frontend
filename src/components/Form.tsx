import React, { FunctionComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Picker } from './index';
import { TEST } from './Picker/Picker';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: "row",
    alignItems: "center",
  }
})

const Form: FunctionComponent = () => {
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
      <Picker values={mockValues} />
      <Text>{TEST}</Text>
    </View>
  );
}

export default Form;
