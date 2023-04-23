import { CustomSafeAreaView } from '@components/SafeAreaView';
import { PressableIcon } from '@components/Icon';
import Header from '@components/Header';
import SearchBar from '@components/SearchBar';
import FriendProfiles from '@components/FriendProfiles';
import { StyleSheet } from 'react-native';
import colors from '@components/colors'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';
import UserInfo from '@components/UserInfo';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.beige,
  }
})

type FriendsProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
};

const Friends = ({ navigation }: FriendsProps) => {
  const rightIcon = (<PressableIcon onPress={() => { navigation.navigate("Home") }} icon="right-arrow" ></PressableIcon>)
  const mockLink = "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg"

  return (
    <CustomSafeAreaView style={styles.container}>
      <Header title={'Friends'} rightIcon={rightIcon} />
      <SearchBar onSearch={() => { }} />
      <FriendProfiles imageUrl={mockLink} username="Adnan A." />
    </CustomSafeAreaView>
  )
}

export default Friends;
