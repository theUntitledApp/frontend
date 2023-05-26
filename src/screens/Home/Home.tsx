import { StyleSheet, ScrollView, Text, View } from 'react-native';
import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import PuzzleContent from '@components/PuzzleContent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16} >
        <View style={{ marginTop: 80 }}>
          <PuzzleContent source={mockLink} />
        </View>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
        <Text style={{ color: 'white' }}>AHHH</Text>
      </ScrollView>
    </View>
  )
}

export function makeHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <Home navigation={navigation}></Home>
}

export default Home;
