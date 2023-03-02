import { SafeAreaView, Text, Button } from 'react-native';
import React from 'react'

const Welcome = ({ navigation }) => {
  return (
    <SafeAreaView>
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
