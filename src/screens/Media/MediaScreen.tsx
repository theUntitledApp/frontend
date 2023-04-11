import { Video, VideoProps } from 'expo-av';
import { Image, } from 'react-native'
import { useState, useEffect } from 'react';
import { useCameraScreen } from '../Camera/CameraScreen';

const MediaScreen: React.FunctionComponent = () => {
  const [mode, setMode] = useState<'camera' | 'preview-video' | 'preview-photo'>('camera');
  const [fileUrl, setFileUrl] = useState<string>();
  const [video, setVideo] = useState<VideoProps>();

  let camera = useCameraScreen();


  useEffect(() => {
    camera.imageTaken$?.subscribe((fileUrl) => {
      setFileUrl(fileUrl);
      setMode('preview-photo');
    })

    camera.videoTaken$?.subscribe((video) => {
      setVideo(video);
      setMode('preview-video')
    })
  }, [])

  if (mode == 'preview-photo') {
    return <Image
      source={{ uri: fileUrl }}
      style={{ flex: 1, width: '100%' }}
    />
  }

  if (mode == 'preview-video') {
    return <Video
      source={video.source}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={true}
      isLooping={false}
      style={{ flex: 1, width: '100%' }}
    />
  }

  return camera.render;

}

export default MediaScreen;
