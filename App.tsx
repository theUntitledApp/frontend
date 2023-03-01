import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { SmallText, RegularText, BoldText } from './src/components/index';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold": require("./src/assets/font/Lato-Bold.ttf"),
    "Lato-Regular": require("./src/assets/font/Lato-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <SmallText textStyles={{width: "70%", color: 'yellow', marginBottom: 5}}>Small Text</SmallText>
      <BoldText> Bold Text</BoldText>
      <RegularText>Regular Text</RegularText>
      <Text>Open up App.tsx to sta222rt working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
