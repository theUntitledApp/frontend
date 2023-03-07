import React, { FunctionComponent, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { SmallText } from './index';

import colors from './colors';

type PickerProps = {
  values: string[];
  onValueChange: (value: string) => void;
  selectedValue?: string;
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopColor: colors.midnightBlack,
    borderBottomColor: colors.midnightBlack,
  },
  selectedItemContainer: {
    backgroundColor: colors.poisonGreen,
  },
})

const Picker: FunctionComponent<PickerProps> = (props) => {
  const [selectedItem, setSelectedItem] = useState(props.selectedValue || props.values[0]);
  const ITEM_HEIGHT = 50;

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    setSelectedItem(props.values[index]);
    props.onValueChange(props.values[index]);
  }
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={handleScroll}
        snapToInterval={ITEM_HEIGHT}
        contentContainerStyle={styles.scrollContainer}
      >
        {props.values.map((item) => (
          <View
            key={item}
            style={[
              styles.itemContainer,
              item === selectedItem && styles.selectedItemContainer,
            ]}
          >
            <SmallText>{item}</SmallText>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Picker;
