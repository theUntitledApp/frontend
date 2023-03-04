import { SafeAreaView, Text, Button } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView>
      <Text>Login </Text>
      <Button
        title="Welcome"
        onPress={() =>
          navigation.navigate("Welcome")
        }
      />

    </SafeAreaView>
  )
}

export default Login;
