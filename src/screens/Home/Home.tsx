import { StyleSheet, ScrollView } from 'react-native';
import React from 'react'

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import Header from '@components/Header';
import Icon, { PressableIcon } from '@components/Icon';
import { CustomSafeAreaView } from '@components/SafeAreaView';

import SplitView from '@components/SplitView';
import LoadingAnimation from '@components/LoadingAnimation';
import UserInfo from '@components/UserInfo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
})

type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};
const mockLink = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"

const Home = ({ navigation }: HomeProps) => {
  const leftIcon = (
    <PressableIcon onPress={() => { navigation.navigate('Friends', { uid: 1 }) }}
      icon='friends'></PressableIcon>
  );
  const rightIcon = (
    <UserInfo navigation={navigation} userId={1} image="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" />
  );
  return (
    <CustomSafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={leftIcon} rightIcon={rightIcon} />
        <SplitView title="Tests" subtitle="Tests TestsTests" bottomImageUrl={mockLink} />
      </ScrollView>
    </CustomSafeAreaView >
  )
}

export function makeHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <Home navigation={navigation}></Home>
}

export default Home;
