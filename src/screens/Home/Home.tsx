import { StyleSheet, View, ScrollView, PixelRatio } from 'react-native';
import React from 'react'

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import Header from '@components/Header';
import Icon, { PressableIcon } from '@components/Icon';
import { CustomSafeAreaView } from '@components/SafeAreaView';

import CaptureButton from '@components/CaptureButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
})

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

const Home = ({ navigation }: HomeProps) => {

  const leftIcon = <Icon icon='left-arrow'></Icon>;
  const rightIcon = (
    <PressableIcon onPress={() => { navigation.navigate('MediaScreen') }}
      icon='friends'></PressableIcon>
  );

  return (
    <CustomSafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={leftIcon} rightIcon={rightIcon} />
      </ScrollView>
    </CustomSafeAreaView >
  )
}

export function makeHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <Home navigation={navigation}></Home>
}

export default Home;
