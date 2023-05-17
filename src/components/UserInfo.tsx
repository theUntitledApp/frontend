import React, { FunctionComponent } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from 'src/screens/rootStacks';

type UserInfoProp = {
  name?: string,
  image: string,
  location?: string,
  position?: 'left' | 'right',
  userId: number,
  navigation: NativeStackNavigationProp<RootStackParams>,
}

const UserInfo: FunctionComponent<UserInfoProp> = ({ name, image, position, location, userId, navigation }) => {
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('Profile', { uid: userId }) }} >
      <View style={[styles.container, position === 'left' ? styles.leftPosition : styles.rightPosition]}>
        {name && position === 'right' && <Text style={styles.text}>{name}</Text>}
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
        {name && position === 'left' && <Text style={styles.text}>{name}</Text>}
      </View>
    </TouchableOpacity>
  )
}

export default UserInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    overflow: 'hidden',
    width: "100%",
  },
  leftPosition: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rightPosition: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: 'white',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  text: {
    marginLeft: 8,
    marginRight: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
