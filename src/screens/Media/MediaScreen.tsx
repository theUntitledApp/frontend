import { Video, VideoProps } from 'expo-av';
import { Image, View, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useState, useEffect, FunctionComponent } from 'react';
import { useCameraScreen, } from '../Camera/CameraScreen';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../rootStacks';

type MediaMode = 'camera' | 'preview-video' | 'preview-photo';

type ApprovementButtonsProps = {
  decline: () => void;
  accept: () => void;
}

const ApprovementButtons: React.FunctionComponent<ApprovementButtonsProps> = ({ decline, accept }) => {
  return (
    <View style={{ flexDirection: 'row', position: 'absolute', bottom: 20, left: '50%', transform: [{ translateX: -20 }] }}>
      <TouchableOpacity onPress={decline} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={accept} style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="check" size={24} color="black" />
      </TouchableOpacity>
    </View>

  )
}

export interface MediaInterface {
  onMediaCaptured: (mediaFile: string | VideoProps) => void;
}

type MediaScreenProps = {
  mediaToCapture: (fileType: string | VideoProps) => void;
}


const MediaScreen: FunctionComponent = () => {
  const [mode, setMode] = useState<MediaMode>('camera');
  const [fileUrl, setFileUrl] = useState<string>();
  const [video, setVideo] = useState<VideoProps>();
  let camera = useCameraScreen();

  useEffect(() => {
    const imageSubscription = camera.imageTaken$?.subscribe((fileUrl) => {
      setFileUrl(fileUrl);
      setMode('preview-photo');
    });
    const videoSubscription = camera.videoTaken$?.subscribe((video) => {
      setVideo(video);
      setMode('preview-video');
    });
    return () => {
      imageSubscription?.unsubscribe();
      videoSubscription?.unsubscribe();
    };
  }, [camera.imageTaken$, camera.videoTaken$]);

  const retake = () => {
    setVideo(undefined);
    setFileUrl(undefined);
    setMode('camera');
  };

  const accept = () => {
    console.log('file: ', fileUrl || video)
  };

  if (mode === 'preview-photo') {
    return (
      <View style={{ flex: 1 }}>
        <Image source={{ uri: fileUrl }} style={{ flex: 1, width: '100%' }} />
        <ApprovementButtons decline={retake} accept={accept} />
      </View>
    );
  }
  if (mode === 'preview-video') {
    return (
      <View style={{ flex: 1 }}>
        <Video
          source={video.source}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={true}
          isLooping={false}
          style={{ flex: 1, width: '100%' }}
        />
        <ApprovementButtons decline={retake} accept={accept} />
      </View>
    );
  }
  return camera.render;

}

export default MediaScreen;

export function makeMediaScreen(callback: (fileType: string | VideoProps) => void) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParams>>();
}
