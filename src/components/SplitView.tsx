import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { RootStackParams } from 'src/screens/rootStacks';
import colors from './colors';
import { PressableIcon } from './Icon';
import UserInfo from './UserInfo';
import { useNavigation } from '@react-navigation/native';

export interface SplitViewProps {
  users?: any;
  topImageUrl?: string;
  bottomImageUrl: string;
  title: string;
  subtitle: string;
};


const ShadowedInsetImage = ({ source }: { source: string }) => (
  <View style={styles.shadowedInsetImageContainer}>
    <Image source={{ uri: source }} style={styles.shadowedInsetImage} />
  </View>
);

const TakeImage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={[styles.shadowedInsetImageContainer, styles.shadowedInsetImageContainerEmpty]}>
      <Button
        title="Take a Picture"
        color="white"
        onPress={() =>
          navigation.navigate("MediaScreen")
        }
      />
    </View>
  )
}

const SplitView: FunctionComponent<SplitViewProps> = ({ users, title, subtitle, topImageUrl, bottomImageUrl }: SplitViewProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {topImageUrl && <ShadowedInsetImage source={topImageUrl} />}
        {!topImageUrl && <TakeImage />}
      </View>
      <UserInfo name="Alex P." image="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" position="left" location=""></UserInfo>
      <View style={styles.textContainer}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <UserInfo name="Adnan A." image="https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80" position="right" location=""></UserInfo>
      <View style={styles.imageContainer}>
        <ShadowedInsetImage source={bottomImageUrl} />
      </View>
    </View>
  );
}
export default SplitView;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,

    elevation: 5,
    overflow: 'hidden',
    paddingVertical: 15,
  },
  imageContainer: {
    height: 250,
    width: 'auto',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    overflow: 'hidden',
  },
  textContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textBox: {
    backgroundColor: colors.beige,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
  shadowedInsetImageContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  shadowedInsetImageContainerEmpty: {
    backgroundColor: '#181823',
    justifyContent: 'center',
  },
  shadowedInsetImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

