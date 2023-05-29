import { Text, Button, View } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import colors from '../../components/colors';
import { CustomSafeAreaView } from '@components/SafeAreaView';
import Tab from '@components/Tab';
import Form from '@components/Form';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const tabs = [
    {
      title: 'Login',
      content: (
        <View>
          <Form form="login" />
        </View>
      )
    },
    {
      title: 'Register',
      content: (
        <View>
          <Form form="register" />
        </View>
      )
    }
  ]
  return (
    <CustomSafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
      <Tab tabs={tabs} />
    </CustomSafeAreaView>
  )
}

export default Login;
