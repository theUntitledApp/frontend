import React, { FunctionComponent, useState } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";

import colors from '../colors';
import { RegularText } from "../index";
import PickerGestureHandler from "./PickerGestureHandler";
import { ITEM_HEIGHT, VISIBLE_ITEMS } from "./PickerConstants";
import { PickerProps } from './PickerTypes';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: "center",
    alignItems: "center",
  },
  // container needs to be centered so if we reduce visible items it is still centered
  pickerContainer: {
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    overflow: "hidden",
  },
  title: {
    color: colors.beige,
    fontSize: 24,
    marginBottom: 31,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
  },
})

const Picker: FunctionComponent<PickerProps> = (props) => {
  const [activeValue, setActiveValue] = useState({ value: 0, label: 'DE' });
  const { values } = props;
  const translateY = useSharedValue(0);
  const viewStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <View style={styles.pickerContainer}>
      <Animated.View style={viewStyle}>
        {values.map((value, idx) => {
          const y = useDerivedValue(() =>
            interpolate(
              (translateY.value - ITEM_HEIGHT * 2) / - ITEM_HEIGHT,
              [idx - 1.5, idx, idx + 1.5],
              [-1, 0, 1],
              Extrapolate.CLAMP
            )
          );

          const childViewStyle = useAnimatedStyle(() => ({
            transform: [
              { perspective: 500 },
              { rotateX: 90 * y.value + "deg" },
              { scale: 1 - 0.1 * Math.abs(y.value), }
            ],
            paddingLeft: 10,
            paddingRight: 0,
            opacity: 1 - Math.abs(y.value),
          }));

          if (y.value === 0) {
            setActiveValue(value);
          }

          return (
            <Animated.View key={value.value} style={[styles.item, childViewStyle]}>
              <RegularText>{value.label}</RegularText>
            </Animated.View>
          );
        })}
      </Animated.View>
      <PickerGestureHandler value={activeValue} onValueChange={props.onValueChange} pickerTranslateY={translateY} maxValue={values.length} />
    </View>
  )
}

export default Picker;

