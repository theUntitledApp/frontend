import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import { Header, Tab, Form } from '../../components/index';

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  },
  content: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


const tabs = [
  {
    title: 'Login',
    content: (
      <View>
        <Form />
      </View>
    )
  },
  {
    title: 'Register',
    content: (
      <View>
        <Text> Content for Tab 2</Text>
      </View>
    )
  }
]

const Welcome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Welcome"} />
      <View style={styles.content}>
        <Text style={{ color: colors.midnightBlack }} onPress={() => navigation.navigate('Login')}>Hello chicken wing</Text>
        <Button
          title="Home"
          onPress={() =>
            navigation.navigate("Home")
          }
        />
      </View>
      <Tab tabs={tabs} />
    </SafeAreaView >
  )
}

export default Welcome;
