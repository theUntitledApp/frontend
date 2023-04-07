import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { Header } from '../../components/index';
import { Camera } from 'expo-camera';
import useCamera from '../../hooks/useCamera';

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
})

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [statusGranted, setStatusGranted] = useState(false);

  const __requestPermission$ = async () => {
    const { status } = await Camera.getCameraPermissionsAsync();
    setStatusGranted(status === 'granted');
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={{ icon: 'left-arrow', navigateTo: 'Login' }} rightIcon={{ icon: 'friends', navigateTo: 'CameraScreen' }} />
        {
          statusGranted ?
            useCamera(true) :
            (
              <TouchableOpacity
                onPress={__requestPermission$}
              >
                <Text>Meh</Text>
              </TouchableOpacity>
            )
        }
      </ScrollView>
    </SafeAreaView >
  )
}

export default Home;
