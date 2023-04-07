import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Camera } from "../../components/Camera";

const CameraScreen: React.FunctionComponent<{ camera: Camera }> = ({ camera }) => {
    const [mode, setMode] = useState<'camera' | 'preview'>('camera');
    const [fileUrl, setFileUrl] = useState<string>();

    useEffect(() => {
        camera.imageTaken$.subscribe((fileUrl) => {
            setFileUrl(fileUrl);
            console.log(fileUrl);
            setMode('preview');
        })
    }, []);

    if (mode == 'preview') {
        return (<View>
            <Image source={{uri: fileUrl}} style={{width: 300, height: 300}}></Image>
        </View>)
    }

    return camera.render;
}

export default CameraScreen;
