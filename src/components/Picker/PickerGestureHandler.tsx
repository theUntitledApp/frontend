import React, { FunctionComponent } from "react";
import { StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedReaction,
  withTiming,
} from "react-native-reanimated";

import { ITEM_HEIGHT, DURATION } from './PickerConstants';
import { GestureProps } from './PickerTypes';

const timingConfig = {
  duration: DURATION,
  easing: Easing.bezier(0.22, 1, 0.36, 1),
}

const findClosestSnapPoint = (snapPointValue: number, velocity: number, points: number[]) => {
  'worklet';
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


const PickerGestureHandler: FunctionComponent<GestureProps> = (props) => {
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
      <Animated.View style={[StyleSheet.absoluteFillObject]} />
    </PanGestureHandler>
  )
}

export default PickerGestureHandler;

