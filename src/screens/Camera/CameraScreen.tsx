import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TCamera, useSmarthoneCamera } from "../../components/Camera";

const CameraScreen: React.FunctionComponent<{ camera: TCamera }> = ({ camera }) => {
    const [mode, setMode] = useState<'camera' | 'preview'>('camera');
    const [previewBase64, setPreviewBase64] = useState<string>();

    useEffect(() => {
        camera.imageTaken$.subscribe((imageBase64Encoded) => {
            console.log("IMAGE ARRIVED", imageBase64Encoded)
            setPreviewBase64(imageBase64Encoded);
            setMode('preview');
        })
    }, []);

    if (mode == 'preview') {
        console.log("HASDKLASDJLK")
        return (<View>
            <Image source={{uri: previewBase64}} style={{flex: 1}}></Image>
        </View>)
    }

    return camera.render;
}

export default CameraScreen;

export function makeCameraScreen() {
    const smartphoneCamera = useSmarthoneCamera();
    return <CameraScreen camera={smartphoneCamera}></CameraScreen>
}
