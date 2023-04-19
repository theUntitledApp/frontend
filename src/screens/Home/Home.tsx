import { StyleSheet, View, ScrollView, PixelRatio, Text } from 'react-native';
import React, { useState } from 'react'

import colors from '../../components/colors'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

import Header from '@components/Header';
import Icon, { PressableIcon } from '@components/Icon';
import { CustomSafeAreaView } from '@components/SafeAreaView';

import IconDropDownSelector from '@components/IconDropDownSelector'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
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

const Home = ({ navigation }: HomeProps) => {
  const [selectedIcon, setSelectedIcon] = useState('');

  const handleSelectIcon = (icon: string) => {
    setSelectedIcon(icon);
  };

  const leftIcon = <Icon icon='left-arrow'></Icon>;
  const rightIcon = (
    <PressableIcon onPress={() => { navigation.navigate('MediaScreen') }}
      icon='friends'></PressableIcon>
  );

  return (
    <CustomSafeAreaView style={styles.container}>
      <ScrollView scrollEventThrottle={16} stickyHeaderIndices={[0]}>
        <Header title={'Home'} leftIcon={leftIcon} rightIcon={rightIcon} />
        <View style={styles.container2}>
          <Text style={styles.header}>Selected Icon: {selectedIcon || 'None'}</Text>
          <IconDropDownSelector
            initialIcon="friends"
            icons={['right-arrow', 'friends', 'left-arrow']}
            onSelectIcon={handleSelectIcon}
          />
        </View>
      </ScrollView>
    </CustomSafeAreaView >
  )
}

export function makeHomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return <Home navigation={navigation}></Home>
}

export default Home;
