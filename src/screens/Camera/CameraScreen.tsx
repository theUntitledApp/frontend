import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, PixelRatio, Dimensions } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { VideoProps } from 'expo-av';
import { PinchGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import Reanimated from 'react-native-reanimated';
import { Observable, Subject, from, tap, } from 'rxjs';
import CaptureButton from '@components/CaptureButton';

const radius = PixelRatio.roundToNearestPixel(40);
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
  }
})

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
  const [flash, setFlash] = useState<FlashMode | number>(FlashMode.off);
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

  const toggleFlash = () => {
    setFlash(flash === FlashMode.off ? FlashMode.torch : FlashMode.off);
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

  const handleCapture = (media: 'photo' | 'video') => {
    media === 'video' ? startRecording() : takePicture();
  }

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
              <Camera style={{ flex: 1 }} type={type} ref={setCameraRef} zoom={zoom} flashMode={flash}>
                <View style={{ flex: 1, position: 'relative' }}>
                  <View
                    style={styles.iconContainer}>
                    <TouchableOpacity
                      style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: 'rgba(0,244, 210, 0.2)'
                      }}
                      onPress={toggleCamera}>
                      <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        Flip
                      </Text>
                    </TouchableOpacity>
                    <View style={{
                      width: radius * 2,
                      height: radius * 2,
                      padding: 20,
                    }}>
                      <CaptureButton
                        strokeWidth={8}
                        radius={radius}
                        timeComplete={100}
                        onPress={(media: 'photo' | 'video') => {
                          recording ? stopRecording() : handleCapture(media);
                        }} />
                    </View>
                    <TouchableOpacity
                      style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                        padding: 20,
                        backgroundColor: 'rgba(0,244, 210, 0.2)'
                      }}
                      onPress={toggleFlash}>
                      <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                        Flash
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.container}>
                  </View>
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

