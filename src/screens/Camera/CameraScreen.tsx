import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Image, Text, TouchableOpacity, ImageProps, StyleSheet } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import { Video, VideoProps } from 'expo-av';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent, TapGestureHandler } from 'react-native-gesture-handler';
import Reanimated, { Extrapolate, interpolate, useAnimatedGestureHandler, useAnimatedProps, useSharedValue } from 'react-native-reanimated';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../rootStacks';

type CameraScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParams>;
}

const CameraScreen = ({ navigation }: CameraScreenProps) => {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [hasMicrophonePermission, setHasMicrophonePermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [recording, setRecording] = useState<boolean>(false);
  const [video, setVideo] = useState<VideoProps | null>(null);
  const [photo, setPhoto] = useState<ImageProps | null>(null);
  const [zoom, setZoom] = useState(0);

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
      const image: CameraCapturedPicture = await cameraRef.takePictureAsync();
      const source = { uri: image.uri };
      setPhoto({ source });
      if (photo) {

        mediaCaptured(photo, 'photo')
      }
    }
  };

  const startRecording = async () => {
    if (cameraRef) {
      try {
        setRecording(true);
        const videoData = await cameraRef.recordAsync();
        const source = { uri: videoData.uri };
        setVideo({ source });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef) {
      setRecording(false);
      cameraRef.stopRecording();
      mediaCaptured(video, 'video');
    }
  };

  const mediaCaptured = (media: VideoProps | ImageProps, type: 'photo' | 'video') => {
    navigation.navigate("MediaScreen", { media: media, type: type })
  }

  if (hasCameraPermission === null || hasMicrophonePermission === null) {
    return <View />;
  }
  if (hasCameraPermission === false || hasMicrophonePermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
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
};

export default CameraScreen;
