import React, { FC, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
  circle: {
    borderRadius: 100 / 2,
    backgroundColor: "red",
  }
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
  const [intervalId, setIntervalId] = useState<number | undefined>(undefined);
  const innerRadius = radius - strokeWidth / 2;
  const circumfrence = 2 * Math.PI * innerRadius;

  const invertedCompletion = (100 - timeComplete) / 100;
  const theta = useSharedValue(2 * Math.PI);
  const animateTo = useDerivedValue(() => 2 * Math.PI * invertedCompletion);
  const animatedProps = useAnimatedProps(() => {
    const value = theta.value * innerRadius;
    return {
      strokeDashoffset: withTiming(value, {
        duration: 1500,
      }),
    };
  });

  const progress = useSharedValue(innerRadius * 1.1);
  const animateInnerTo = useDerivedValue(() => innerRadius * 0.7)
  const animatedPropsInner = useAnimatedProps(() => {
    const size = progress.value;
    return {
      r: withTiming(size, {
        duration: 1500,
      }),
    }
  })

  const handlePressIn = () => {
    theta.value = animateTo.value;
    progress.value = animateInnerTo.value;
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => prevTime + 100);
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
      progress.value = innerRadius * 1.1;
    }
    setCurrentTime(0);
    setIntervalId(undefined);
  };

  return (
    <TouchableOpacity style={styles.container}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Svg width="100%" height="100%" viewBox="0 0 100 100">
        <AnimatedCircle
          animatedProps={animatedProps}
          cx="50%"
          cy="50%"
          r={innerRadius}
          fill={'transparent'}
          stroke="red"
          strokeDasharray={`${circumfrence} ${circumfrence}`}
          strokeWidth={strokeWidth}
          strokeDashoffset={2 * Math.PI * (innerRadius * 0.5)}
          strokeLinecap="round"
        />
        <AnimatedCircle
          animatedProps={animatedPropsInner}
          cx="50%"
          cy="50%"
          r={innerRadius * 1.1}
          fill='white'
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default CaptureButton;

