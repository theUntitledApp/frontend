import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import React from 'react'

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import Header from '@components/Header';
import Icon, { PressableIcon } from '@components/Icon';

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
    <PressableIcon onPress={() => { navigation.navigate('CameraScreen') }}
      icon='friends'></PressableIcon>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={leftIcon} rightIcon={rightIcon} />
        <View style={{ flex: 1, flexGrow: 20, position: 'relative' }}>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export function makeHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <Home navigation={navigation}></Home>
}

export default Home;
