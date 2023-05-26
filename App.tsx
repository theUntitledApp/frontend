import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParams } from './src/screens/rootStacks';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Welcome, Login, MediaScreen, Friends, Profile } from './src/screens/screenIndex';
import { makeHomeScreen } from './src/screens/Home/Home';

import { Text, View, TouchableOpacity } from 'react-native'
import Header from '@components/Header';


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
        initialRouteName="Home"
        screenOptions={{
          headerTransparent: true
        }}
      >
        <RootStack.Screen
          name="Home"
          component={() => makeHomeScreen()}
          options={{
            header: () => (
              <Header title="Home" left={"friends"} right={"friends"} />
            ),
          }}
        />
        <RootStack.Screen
          name="Welcome"
          component={Welcome}
        />
        <RootStack.Screen
          name="MediaScreen"
          component={MediaScreen}
        />
        <RootStack.Screen
          name="Friends"
          component={Friends}
        />
        <RootStack.Screen
          name="Profile"
          component={Profile}
        />
        <RootStack.Screen name='Login' component={Login} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

