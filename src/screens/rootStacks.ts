import { ImageProps } from 'react-native';
import { VideoProps } from 'expo-av';

type rootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Login: undefined,
  CameraScreen: undefined,
  MediaScreen: {
    media: VideoProps | ImageProps,
    type: 'photo' | 'video',
  },
  PermissionsScreen: undefined,
}

type RootStackParams = rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
