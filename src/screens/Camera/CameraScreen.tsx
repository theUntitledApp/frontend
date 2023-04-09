import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { CameraCapturedPicture } from 'expo-camera/build/Camera.types';
import { Video, VideoProps } from 'expo-av';

const CameraScreen: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [cameraRef, setCameraRef] = useState<Camera | null>(null);
  const [type, setType] = useState<CameraType>(CameraType.back);
  const [recording, setRecording] = useState<boolean>(false);
  const [video, setVideo] = useState<VideoProps | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo: CameraCapturedPicture = await cameraRef.takePictureAsync();
      console.log(photo);
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
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={type} ref={setCameraRef}>
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
              onPress={() => {
                setType(
                  type === CameraType.back
                    ? CameraType.front
                    : CameraType.back
                );
              }}>
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
              onPress={recording ? stopRecording : startRecording}>
              <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {recording ? 'Stop' : 'Record'}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
      {video && (
        <Video
          source={video.source}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          isLooping={false}
          style={{ width: '100%', height: 200 }}
        />
      )}
    </View>
  );
};

export default CameraScreen;
