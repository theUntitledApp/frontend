import { CustomSafeAreaView } from "@components/SafeAreaView";
import { useState } from "react";
import { Button } from "react-native";
import { Subject } from "rxjs";
import { Camera } from "../Camera";

export function useDummyCamera(): Camera {
    const [imageTaken$] = useState(new Subject<string>());

    const _takePhoto = () => {
        imageTaken$.next('https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80');
    }

    return {
        imageTaken$,
        render: <CustomSafeAreaView>
            <Button title="Aufnehmen" onPress={_takePhoto}></Button>
        </CustomSafeAreaView>
    };
}