import React, { useEffect, useState } from 'react';
import { Camera as ExpoCamera, CameraType } from 'expo-camera';
import { Button, Text, TouchableOpacity } from 'react-native';
import { from, Observable, Subject, tap } from 'rxjs';
import { SafeAreaView } from 'react-native-safe-area-context';

export interface Camera {
  imageTaken$: Observable<string | undefined>;
  render: JSX.Element;
}

export function useSmartphoneCamera(): Camera {
  let camera: ExpoCamera;
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [imageTaken$] = useState(new Subject<string>());

  const _requestPermission$ = async () => {
    const { status } = await ExpoCamera.requestCameraPermissionsAsync();
    console.log(status);
    setPermissionGranted(status === 'granted');
  }

  const _toggleCameraType = () => {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const _takePhoto = () => {
    from(camera.takePictureAsync()).pipe(
      tap((image) => {
        console.log(image);
        imageTaken$.next(image.uri);
      }),
    ).subscribe();
  }

  useEffect(() => { _requestPermission$() }, []);

  let render = (
    <ExpoCamera
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
          <Text>
            AUFNEHMEN
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ExpoCamera>
  )

  if (!permissionGranted)
    render = <Text>Please allow camera permission!</Text>;

  return {
    imageTaken$,
    render
  }
}
