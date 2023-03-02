import { SafeAreaView, Button, StyleSheet } from 'react-native';
import React from 'react'

import Props from './WelcomeType';

import colors from '../../components/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.midnightBlack,
  }
})

const Welcome = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Login"
        onPress={() =>
          navigation.navigate('Login', { name: 'Test' })
        }
      />
    </SafeAreaView>
  )
}

export default Welcome;
