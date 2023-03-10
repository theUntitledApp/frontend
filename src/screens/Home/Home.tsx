import { SafeAreaView, Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react'
import { Header } from '../../components/index';

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={{ icon: 'left-arrow', navigateTo: 'Login' }} rightIcon={{ icon: 'friends', navigateTo: 'Login' }} />
        <View >
          <Text style={{ color: colors.midnightBlack }}>Gawdd damn</Text>
          <Text style={{ color: colors.midnightBlack }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Text style={{ color: colors.midnightBlack }}>Gawdd damn</Text>
          <Text style={{ color: colors.beige }}>Gawdd damn</Text>
          <Button
            title="Login"
            onPress={() =>
              navigation.navigate("Login")
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
