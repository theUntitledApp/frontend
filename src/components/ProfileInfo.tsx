import { FunctionComponent } from "react";
import { View, StyleSheet, Text, Image } from 'react-native';

type ProfileInfoProps = {
  uid: number,
}

const ProfileInfo: FunctionComponent<ProfileInfoProps> = ({ uid }) => {
  const name = "Hey";
  const birthday = "22.22.2222";
  const phoneNumber = "2010230213";
  const email = "asdfasdf@sheesh.gmail.com"
  const imageSource = "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageSource }} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.details}>
          <Text style={styles.detail}>{birthday}</Text>
          <Text style={styles.detail}>{phoneNumber}</Text>
          <Text style={styles.detail}>{email}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: 'row',
    padding: 16,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: 64,
    height: 64,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    flexDirection: 'column',
  },
  detail: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ProfileInfo;
