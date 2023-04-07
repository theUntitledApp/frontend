import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './src/screens/rootStacks';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Welcome, Login, CameraScreen } from './src/screens/screenIndex';
import { makeHomeScreen } from './src/screens/Home/Home';
import { Camera, useSmartphoneCamera } from '@components/Camera';

const RootStack = createNativeStackNavigator<RootStackParams>();
export interface Dependencies {
  camera: Camera;
};

export default function App({camera}: Dependencies) {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/font/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/font/Lato-Regular.ttf"),
  });

  camera ??= useSmartphoneCamera();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen
          name="Home"
          component={() => makeHomeScreen()}
        />
        <RootStack.Screen
          name="Welcome"
          component={Welcome}
        />
        <RootStack.Screen
          name="CameraScreen"
          component={(props: any) => <CameraScreen {...props} camera={camera}></CameraScreen>}
        />
        <RootStack.Screen name='Login' component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

