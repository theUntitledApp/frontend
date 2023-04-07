import React, { useEffect, useState } from 'react';
import { Camera as ExpoCamera, CameraType } from 'expo-camera';
import { Text, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { from, Observable, Subject, tap } from 'rxjs';
import { Icon } from './index';

const screenheight = Dimensions.get('screen').height;
const borderheight = Math.ceil((screenheight * 0.4) / 2);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    borderBottomWidth: borderheight,
    borderTopWidth: borderheight,
    borderColor: 'rgba(0, 0, 0, 0.75)',
  },
  iconContainer: {
    position: 'absolute',
    flex: 1,
    zIndex: 2,
    elevation: 2,
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    padding: 50,
  }
})

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
    setPermissionGranted(status === 'granted');
  }

  const _toggleCameraType = () => {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const _takePhoto = () => {
    from(camera.takePictureAsync()).pipe(
      tap((image) => {
        imageTaken$.next(image.uri);
      }),
    ).subscribe();
  }

  useEffect(() => { _requestPermission$() }, []);

  let render = (
    <ExpoCamera
      style={{ flex: 1, height: '100%', position: 'relative' }}
      type={cameraType}
      ref={(r) => { camera = r! }}
    >
      <View style={styles.iconContainer}>
        <TouchableOpacity
          onPress={_toggleCameraType}
          style={styles.icons}
        >
          <Icon icon='left-arrow' size={40} color={"white"} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={_takePhoto}
          style={styles.icons}
        >
          <Icon icon='camera-button' size={60} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_takePhoto}
          style={styles.icons}
        >
          <Icon icon='left-arrow' size={40} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>

      </View>
    </ExpoCamera>
  )

  if (!permissionGranted)
    render = <Text>Please allow camera permission!</Text>;

  return {
    imageTaken$,
    render
  }
}
