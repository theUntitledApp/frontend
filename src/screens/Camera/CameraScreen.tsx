import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';
import { Icon } from '../../components/index';
import colors from '../../components/colors';

const CameraScreen = () => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const iconSize = 19;
  const iconColor = colors.midnightBlack;
  const iconProps = {
    icon: 'friends',
  }

  if (!permission || !permission.granted) {
    navigation.navigate("Welcome");
  }

  const toggleCameraType = () => {
    type === CameraType.back ? setType(CameraType.front) : setType(CameraType.back);
  }

  return (
    <SafeAreaView>
      <Camera type={type}>
        <TouchableOpacity onPress={toggleCameraType}>
          <Icon size={iconSize} iconProps={iconProps} color={iconColor} />
        </TouchableOpacity>
      </Camera>
    </SafeAreaView>
  )
}

export default CameraScreen;
