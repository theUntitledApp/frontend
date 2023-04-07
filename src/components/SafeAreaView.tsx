import { Platform, SafeAreaView, View } from "react-native";

export function CustomSafeAreaView(props: any) {
    if (Platform.OS == 'android') {
        return <View style={{marginTop: 100}}>{props.children}</View>
    }

    return <SafeAreaView {...props}></SafeAreaView>;
}