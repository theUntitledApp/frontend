import React, { FunctionComponent, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from './index';


const Form: FunctionComponent = () => {
  const mockValues = [
    {
      value: 0,
      label: '+49'
    },
    {
      value: 1,
      label: '+234'
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
    <View>
      <Text>Selected Value: Meh</Text>
      <Picker values={mockValues} />
      <Text>Test123</Text>
    </View>
  );
}

export default Form;
