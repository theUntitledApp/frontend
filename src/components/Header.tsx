import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';

import Headline from './Headline';
import { PressableIcon, Icon } from '@components/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../screens/rootStacks'


export type HeaderProps = {
  left?: Icon;
  right?: Icon;
  title: string;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    marginTop: 16,
    height: 80,
  }
})


const Header: FunctionComponent<HeaderProps> = ({ title, left, right }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const leftIcon = (left &&
    <PressableIcon onPress={() => { navigation.navigate('Friends', { uid: 1 }) }}
      icon={left} color="white"></PressableIcon>
  );

  const rightIcon = (right &&
    <PressableIcon onPress={() => { navigation.navigate('Friends', { uid: 1 }) }}
      icon={right} color="white"></PressableIcon>
  );

  return (
    <View
      style={styles.container}
    >
      <>{leftIcon}</>

      <Headline level="h2">{title}</Headline>

      <>{rightIcon}</>

    </View>
  )
}

export default Header;
