import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';
import { Video } from 'expo-av';
import { Image, View } from 'react-native'
import { useState } from 'react';


const MediaScreen = ({ navigation, route }: NativeStackScreenProps<RootStackParams, 'MediaScreen'>) => {
  const { media, type } = route.params
  const [pause, setPause] = useState(true);
  console.log(media);

  if (type === 'video' && media !== null) {
    return (
      <Video
        source={media.source}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={true}
        isLooping={true}
        onPress={setPause(!pause)}
        style={{ flex: 1, width: '100%' }}
      />
    )
  }
  if (type === 'photo') {
    return (
      <Image
        source={media.source}
        style={{ flex: 1, width: '100%' }}
      />
    )
  }
  return (<View />)
}

export default MediaScreen;
