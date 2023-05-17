import { FunctionComponent } from "react";
import { Platform, View, Dimensions, Image, Text, StyleProp, TextStyle, StyleSheet } from 'react-native'
import PuzzleView from '@components/PuzzleView';

type PuzzleContentProp = {
  source: string
}


const PuzzleContent: FunctionComponent<PuzzleContentProp> = ({ source }) => {
  const svgHeight = Dimensions.get('window').height * 0.5;


  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <View style={{ flex: 1, width: "100%", position: 'absolute', top: 0, left: 0 }}>
        <PuzzleView version={1}>
          <Image source={{ uri: source }} style={{ flex: 1, width: '100%', height: svgHeight }} />
        </PuzzleView>
      </View>
      <View style={{ flex: 1, width: "100%", position: 'absolute', top: svgHeight - 93, left: 0 }}>
        <PuzzleView version={2}>
          <Image source={{ uri: source }} style={{ flex: 1, width: '100%', height: svgHeight }} />
        </PuzzleView>
      </View>
    </View >
  )
}

export default PuzzleContent;
