import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootStackParamList from './src/screens/rootStackParamList';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Welcome, Login } from './src/screens/screenIndex';

const Stack = createNativeStackNavigator<RootStackParamList>();

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
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

