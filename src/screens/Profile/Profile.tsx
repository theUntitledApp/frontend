import { FunctionComponent } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';
import { View, Text, StyleSheet } from 'react-native';
import colors from '@components/colors';
import { CustomSafeAreaView } from '@components/SafeAreaView';
import { PressableIcon } from '@components/Icon';
import Header from '@components/Header';
import ProfileInfo from '@components/ProfileInfo';

type ProfileProps = NativeStackScreenProps<RootStackParams, 'Profile'>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  }
})



const Profile: FunctionComponent<ProfileProps> = ({ route, navigation }) => {
  const leftIcon = (<PressableIcon onPress={() => { navigation.navigate("Home") }} icon="left-arrow" ></PressableIcon>)
  return (
    <CustomSafeAreaView style={styles.container}>
      <Header title={'Profile'} leftIcon={leftIcon} />
      <ProfileInfo uid={route.params.uid} />
    </CustomSafeAreaView>
  )
}

export default Profile;
