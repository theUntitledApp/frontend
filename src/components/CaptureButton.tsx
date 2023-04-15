import React, { FC, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle } from 'react-native-svg';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

type CaptureButton = {
  strokeWidth: number;
  radius: number;
  timeComplete: number;
  onPress: (media: 'photo' | 'video') => void
};

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CaptureButton: FC<CaptureButton> = ({
  radius,
  strokeWidth,
  timeComplete,
  onPress
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const innerRadius = radius - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * innerRadius;

  const invertedCompletion = (100 - timeComplete) / 100;
  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
  const finalStrokeDashoffset = useSharedValue(2 * Math.PI * invertedCompletion);

  const animatedProps = useAnimatedProps(() => {
    const value = theta.value * innerRadius;
    finalStrokeDashoffset.value = value;
    return {
      strokeDashoffset: withTiming(value, {
        duration: 1500,
      }),
    };
  });

  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);

  const handlePressIn = () => {
    theta.value = animateTo.value;
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 100);
      console.log(currentTime)
    }, 100);
    setIntervalId(interval);
  };

  const handlePressOut = () => {
    clearInterval(intervalId);
    if (currentTime >= 1500) {
      onPress('video');
    } else {
      onPress('photo');
      theta.value = 2 * Math.PI;
    }
    setCurrentTime(0);
    setIntervalId(undefined);
  };

  return (
    <TouchableOpacity style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Svg style={StyleSheet.absoluteFill}>
        <AnimatedCircle
          animatedProps={animatedProps}
          cx={radius}
          cy={radius}
          r={innerRadius}
          fill={'transparent'}
          stroke="red"
          strokeDasharray={`${circumfrence} ${circumfrence}`}
          strokeWidth={strokeWidth}
          strokeDashoffset={2 * Math.PI * (innerRadius * 0.5)}
          strokeLinecap="round"
        />
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius * 0.7}
          fill="red"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CaptureButton;

