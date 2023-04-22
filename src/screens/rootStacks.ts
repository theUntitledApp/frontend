import { VideoProps } from "expo-av";

type rootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Login: undefined,
  CameraScreen: undefined,
  MediaScreen: undefined,
  PermissionsScreen: undefined,
  Friends: {
    uid: number
  },
}

type RootStackParams = rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
