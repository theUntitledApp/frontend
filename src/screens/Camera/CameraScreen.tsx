import { Image, Text, View } from "react-native";
import { TCamera, useSmarthoneCamera } from "../../components/UserCamera";

const CameraScreen: React.FunctionComponent<{ camera: TCamera }> = ({ camera }) => {

    if (!camera.permissionGranted)
        return <Text>Please allow camera permission!</Text>;

    if (camera.previewBase64) {
        return <View>
            <Text>Du stinkst</Text>
            <Image source={{ uri: camera.previewBase64 }}></Image>
        </View>
    }
    return camera.render;
}

export default CameraScreen;

export function makeCameraScreen() {
    const smartphoneCamera = useSmarthoneCamera();
    return <CameraScreen camera={smartphoneCamera}></CameraScreen>
}
