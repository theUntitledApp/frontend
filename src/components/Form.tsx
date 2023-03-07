import React, { FunctionComponent, useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from './index';


const Form: FunctionComponent = () => {
  const [selectedValue, setSelectedValue] = useState('Value 1');
  const handleValueChange = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <View>
      <Text>Selected Value: {selectedValue}</Text>
      <Picker
        values={['Value 1', 'Value 2', 'Value 3', 'Value 4']}
        onValueChange={handleValueChange}
        selectedValue={selectedValue}
      />
    </View>
  );
}

export default Form;
