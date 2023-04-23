import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated } from 'react-native';

interface Props { }

const LoadingAnimation: React.FC<Props> = () => {
  const [text, setText] = useState('Untitled');
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      animateText('Un', 'titled');
    }, 1000);

    return () => clearTimeout(timeout1);
  }, []);

  const animateText = (first: string, second: string) => {
    setText(first + second);
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(moveAnim, {
        toValue: -20,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start(() => {
      setText(first + ' ' + second);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start(() => {
        const timeout2 = setTimeout(() => {
          animateText(second.charAt(0), second.slice(1));
        }, 1500);

        return () => clearTimeout(timeout2);
      });
    });
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Animated.View style={{ transform: [{ translateY: moveAnim }] }}>
        <Animated.Text style={{ opacity: fadeAnim }}>{text}</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default LoadingAnimation;
