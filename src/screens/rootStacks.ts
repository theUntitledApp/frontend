const rootStackParamList = {
  Welcome: undefined,
  Login: undefined,
}

type RootStackParams = typeof rootStackParamList;
type RootStackRoute = keyof RootStackParams;


export { RootStackParams, RootStackRoute };
