import React, { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { from, tap } from 'rxjs';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface TCamera {
  permissionGranted: boolean;
  previewBase64: string | undefined;
  render: JSX.Element;
}

export function useSmarthoneCamera(): TCamera {
  let camera: Camera;
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [previewBase64, setPreviewBase64] = useState<string>();

  const _requestPermission$ = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    setPermissionGranted(status === 'granted');
  }

  const _toggleCameraType = () => {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const _takePhoto = () => {
    from(camera.takePictureAsync()).pipe(
      tap(({ base64 }) => {
        setPreviewBase64(base64);
      }),
    ).subscribe();
  }

  useEffect(() => { _requestPermission$() }, []);

  return {
    permissionGranted,
    previewBase64,
    render: (
      <Camera
        style={{ flex: 1, height: '100%' }}
        type={cameraType}
        ref={(r) => { camera = r! }}
      >
        <SafeAreaView>
          <TouchableOpacity
            onPress={_toggleCameraType}
          >
            <Text>
              Switch Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={_takePhoto}
          >
          </TouchableOpacity>
        </SafeAreaView>
      </Camera>
    )
  }
}
