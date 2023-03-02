import { View, Text } from 'react-native';
import React from 'react'

const Login = ({ navigation, route }) => {
  return (
    <View>
      <Text>Login {route.params.name}</Text>
    </View>
  )
}

export default Login;
