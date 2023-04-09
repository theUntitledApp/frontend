const rootStackParamList = {
  Welcome: undefined,
  Home: undefined,
  Login: undefined,
  CameraScreen: undefined,
  PermissionsScreen: undefined,
}

type RootStackParams = typeof rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
