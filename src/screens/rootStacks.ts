type rootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Login: undefined,
  CameraScreen: undefined,
  MediaScreen: undefined,
  PermissionsScreen: undefined,
  Profile: {
    uid: number
  },
  Friends: {
    uid: number
  },
}

type RootStackParams = rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
