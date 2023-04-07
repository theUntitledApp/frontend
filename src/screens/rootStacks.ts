const rootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Login: undefined,
  CameraScreen: undefined,
}

type RootStackParams = typeof rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
