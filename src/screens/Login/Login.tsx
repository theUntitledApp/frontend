import { Text, Button } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import { Header } from '../../components/index';
import colors from '../../components/colors';
import { CustomSafeAreaView } from '@components/SafeAreaView';

const Login = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <CustomSafeAreaView style={{ flex: 1, backgroundColor: colors.beige }}>
      <Header title={'Login'} rightIcon={{ icon: 'friends', navigateTo: 'Login' }} />

      <Text style={{ color: colors.beige }}>Gawdd damn</Text>
      <Button
        title="Welcome"
        onPress={() =>
          navigation.navigate("Welcome")
        }
      />

    </CustomSafeAreaView>
  )
}

export default Login;
