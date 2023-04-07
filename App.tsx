import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './src/screens/rootStacks';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Welcome, Login, Home, CameraScreen } from './src/screens/screenIndex';

const RootStack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/font/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/font/Lato-Regular.ttf"),
  });

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
          component={Home}
        />
        <RootStack.Screen
          name="Welcome"
          component={Welcome}
        />
        <RootStack.Screen
          name="CameraScreen"
          component={CameraScreen}
        />
        <RootStack.Screen name='Login' component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

