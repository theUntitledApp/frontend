import { Camera } from "@components/Camera";
import { useState } from "react";
import { Subject } from "rxjs";
import * as ImagePicker from 'expo-image-picker';
import { Button, SafeAreaView } from "react-native";

export function useImagePickerCamera(): Camera {
    const [imageTaken$] = useState(new Subject<string>());
    
    const pickImage = async () => {
        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: false,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: false
        });
        
        imageTaken$.next(result.assets![0].uri);
    }

    return {
        render: <SafeAreaView><Button onPress={pickImage} title="Pick image"></Button></SafeAreaView>,
        imageTaken$,
    };
}