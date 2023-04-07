import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

let camera: Camera;

type UserCameraProps = {

}

const UserCamera: FunctionComponent<UserCameraProps> = (props) => {
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [preview, setPreview] = useState(false);
  const [savedImage, setSavedImage] = useState<any>(null);

  const __toggleCameraType = () => {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const __takePhoto = async () => {
    const photo: any = await camera.takePictureAsync();
    setSavedImage(photo);
  }


  return (
    <View>
      {
        preview && savedImage ?
          (
            <Text>
            </Text>
          )
          : (<Camera
            type={cameraType}
          >
            <View>
              <TouchableOpacity
                onPress={__toggleCameraType}
              >
                <Text>
                  Switch Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={__takePhoto}
              >
              </TouchableOpacity>
            </View>
          </Camera>
          )
      }
    </View>
  )
}

export default UserCamera;
