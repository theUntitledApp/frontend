import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Reactable } from '../modules/reactions/reactable';
import Icon from './Icon';

export interface SplitViewProps {
    topImage: string | any;
    bottomImage: string | any;
    prompt: string;
};

export class SplitViewWithReactionProps implements SplitViewProps {
    topImage: Image = {} as any;
    bottomImage: Image = {} as any;

    constructor(public prompt: string, public topReactable: Reactable, public bottomReactable: Reactable) {
        this.topImage = topReactable.image;
        this.bottomImage = bottomReactable.image;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
        maxWidth: '100%',
        flexDirection: 'column',
    },
});

export function SplitView({ prompt, topImage, bottomImage }: SplitViewProps) {
    return (
        <SafeAreaView style={{ ...styles.container, margin: 20 }}>
            <Image style={styles.container} source={topImage}></Image>
            <View style={{ paddingTop: 15, paddingBottom: 15, backgroundColor: '#aaaaaa66' }}>
                <Text style={{textAlign: 'center', fontSize: 20}}>{prompt}</Text>
                <Icon icon={'friends'}></Icon>
            </View>
            <Image style={styles.container} source={bottomImage}></Image>
        </SafeAreaView>
    );
}

export function SplitViewWithReaction(props: SplitViewWithReactionProps) {
    return (<SplitView {...props}></SplitView>);
}