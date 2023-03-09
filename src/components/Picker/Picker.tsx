import React, { FunctionComponent } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

import colors from '../colors';

import { ITEM_HEIGHT, VISIBLE_ITEMS, DURATION } from "./PickerConstants";
import { GestureProps, PickerProps } from './PickerTypes';

const { width: WIDTH } = Dimensions.get("window");

const timingConfig = {
  duration: DURATION,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.midnightBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    width: 0.61 * WIDTH,
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
  label: {
    color: colors.beige,
    fontSize: 24,
    lineHeight: ITEM_HEIGHT,
    textAlign: "center",
    textAlignVertical: "center",
  },

})

// finds closes point to the wanted SnapPoint
const findClosestSnapPoint = (snapPointValue: number, velocity: number, points: number[]) => {
  let maxValue: number = Infinity;
  const snapPoint = snapPointValue + 0.2 * velocity;
  let closestsSnapPoint = snapPoint;

  for (let i = 0; i < points.length; i++) {
    const point = points[i];
    const distance = Math.abs(snapPoint - point);
    const distanceSmallerCurrentMax = maxValue > distance;
    maxValue = distanceSmallerCurrentMax ? distance : maxValue;
    closestsSnapPoint = distanceSmallerCurrentMax ? point : closestsSnapPoint;
  }

  return closestsSnapPoint;
}

const usePanGestureHandler = (snapPoints: number[]) => {
  const offset = useSharedValue(-ITEM_HEIGHT);
  const position = useSharedValue(offset.value);
  const toValue = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onStart: () => {
      offset.value = position.value;
    },
    onActive: (event: { translationY: number, velocityY: number }) => {
      position.value = offset.value + event.translationY;
      toValue.value = findClosestSnapPoint(position.value, event.velocityY, snapPoints);
    },
    onEnd: () => {
      position.value = withTiming(toValue.value, timingConfig);
    }
  });

  return { position, gestureHandler };
};


const GestureHandler: FunctionComponent<GestureProps> = (props) => {
  const { maxValue, pickerTranslateY } = props;
  const snapPoints = new Array(maxValue).fill(0).map((_, i) => i * -ITEM_HEIGHT);
  const { position, gestureHandler } = usePanGestureHandler(snapPoints);

  useAnimatedReaction(
    () => {
      position.value;
    },
    () => {
      pickerTranslateY.value = position.value + ITEM_HEIGHT * 2;
    },
    []
  );
  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View style={[StyleSheet.absoluteFillObject, { backgroundColor: "rgba(255, 255, 255, 0,1)" }]} />
    </PanGestureHandler>
  )
}

const Picker: FunctionComponent<PickerProps> = (props) => {
  const { values, defaultValue } = props;
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
              (translateY.value - ITEM_HEIGHT * 2) / -ITEM_HEIGHT,
              [idx - 3, idx, idx + 3],
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
          }));
          //Replace Text with our own text components Small or Regular
          return (
            <Animated.View key={value.value} style={[styles.item, childViewStyle]}>
              <Text style={styles.label}>{value.label}</Text>
            </Animated.View>
          );
        })}
      </Animated.View>
      <GestureHandler pickerTranslateY={translateY} maxValue={values.length} />
    </View>
  )
}

export default Picker;

