import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { VideoProps } from 'expo-av';
import { PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';
import { Observable, Subject, from, tap, } from 'rxjs';


export interface CameraInterface {
  imageTaken$?: Observable<string | undefined>;
  videoTaken$?: Observable<VideoProps | undefined>;
  render: JSX.Element;
}

export function useCameraScreen(): CameraInterface {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [recording, setRecording] = useState<boolean>(false);
  const [zoom, setZoom] = useState(0);
  const [imageTaken$] = useState(new Subject<string>());
  const [videoTaken$] = useState(new Subject<VideoProps>());

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');

      const microphoneStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasMicrophonePermission(microphoneStatus.status === 'granted');
    })();
  }, []);

  const toggleCamera = () => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back);
  }

  const onDoubleTap = useCallback(() => {
    toggleCamera();
  }, [toggleCamera])

  const onPinchHandler = (event: any) => {
    const zoomValue = event.nativeEvent.scale - 1;
    const newZoom = Math.max(0, Math.min((zoom + zoomValue) * 0.05, 1));
    setZoom(newZoom);
  }

  const takePicture = async () => {
    if (cameraRef && !recording) {
      from(cameraRef.takePictureAsync()).pipe(
        tap((image) => {
          imageTaken$.next(image.uri);
        }),
      ).subscribe();
    }
  };

  const startRecording = async () => {
    if (cameraRef) {
      try {
        setRecording(true);
        from(cameraRef.recordAsync()).pipe(
          tap((source) => {
            videoTaken$.next({ source });
          }),
        ).subscribe();

      } catch (error) {
        console.error(error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef) {
      setRecording(false);
      cameraRef.stopRecording();
    }
  };

  let render;

  if (hasCameraPermission === null || hasMicrophonePermission === null) {
    render = <View />;
  }
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    render = <Text>No access to camera</Text>;
  }
  render = (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <PinchGestureHandler onGestureEvent={(event) => onPinchHandler(event)} >
          <Reanimated.View style={StyleSheet.absoluteFill}>
            <TapGestureHandler onEnded={onDoubleTap} numberOfTaps={2}>
              <Camera style={{ flex: 1 }} type={type} ref={setCameraRef} zoom={zoom}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                  }}>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={toggleCamera}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      Flip
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      flex: 0.1,
                      alignSelf: 'flex-end',
                      alignItems: 'center',
                    }}
                    onPress={recording ? stopRecording : takePicture}
                    onLongPress={recording ? stopRecording : startRecording}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                      {recording ? 'Stop' : 'Record'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Camera>
            </TapGestureHandler>
          </Reanimated.View>
        </PinchGestureHandler>
      </View>
    </View>
  );
  return {
    imageTaken$,
    videoTaken$,
    render
  }
};

