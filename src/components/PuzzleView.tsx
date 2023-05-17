import MaskedView from '@react-native-masked-view/masked-view'
import { FunctionComponent, ReactNode } from 'react'
import { Svg, Path, Rect, ClipPath, Defs } from 'react-native-svg'
import { View, StyleProp, TextStyle, StyleSheet } from 'react-native'

type PuzzleViewProp = {
  children: ReactNode
  styles?: StyleProp<TextStyle>;
  version: number;
}

const PuzzleView: FunctionComponent<PuzzleViewProp> = ({ children, styles, version }) => {

  return (
    <MaskedView
      style={[{ flex: 1, flexDirection: 'row', height: '100%' }, styles]}
      maskElement={
        <View
          style={{
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Svg width={"100%"} height={"100%"} viewBox="0 0 50 66" preserveAspectRatio="xMidYMid meet">
            <Defs>
              <ClipPath id="clip">
                {version === 1 &&
                  <Path
                    d="M33.3764 0H3C1.34315 0 0 1.34315 0 3V6.42857C0 8.08543 1.34314 9.42857 3 9.42857H26.4944C28.1512 9.42857 29.4944 10.7717 29.4944 12.4286V17.1553C29.4944 18.8121 28.1512 20.1553 26.4944 20.1553H24.4888C22.8319 20.1553 21.4888 21.4984 21.4888 23.1553V23.7143C21.4888 25.3711 20.1456 26.7143 18.4888 26.7143H3C1.34315 26.7143 0 28.0574 0 29.7143V31.5031C0 33.16 1.34315 34.5031 3 34.5031H5.56742C7.22427 34.5031 8.56742 35.8463 8.56742 37.5031V39.7702C8.56742 41.427 7.22427 42.7702 5.56741 42.7702H3C1.34315 42.7702 0 44.1133 0 45.7702V63C0 64.6569 1.34314 66 3 66H38.4326C40.0894 66 41.4326 64.6569 41.4326 63V61.0745C41.4326 59.4177 40.0894 58.0745 38.4326 58.0745H25.9716C24.349 58.0745 23.0337 56.7592 23.0337 55.1366C23.0337 53.5141 24.349 52.1988 25.9716 52.1988H47C48.6569 52.1988 50 50.8556 50 49.1988V12.4286C50 10.7717 48.6569 9.42857 47 9.42857H39.3764C37.7196 9.42857 36.3764 8.08542 36.3764 6.42857V3C36.3764 1.34315 35.0333 0 33.3764 0Z"
                  />
                }
                {version === 2 &&
                  <Path
                    d="M38.5 5.75H25.9998C24.2531 5.75 22.91 4.20529 23.1527 2.47556C23.3519 1.05597 24.5663 0 25.9998 0H47C48.6569 0 50 1.34315 50 3V35.25C50 36.9069 48.6569 38.25 47 38.25H38.5C36.8431 38.25 35.5 39.5931 35.5 41.25V45.75C35.5 47.4069 36.8431 48.75 38.5 48.75H47C48.6569 48.75 50 50.0931 50 51.75V63C50 64.6569 48.6569 66 47 66H3C1.34315 66 0 64.6569 0 63V56.5C0 55.8096 0.559644 55.25 1.25 55.25C1.94036 55.25 2.5 54.6904 2.5 54V53C2.5 52.0335 3.2835 51.25 4.25 51.25C5.2165 51.25 6 50.4665 6 49.5V48.5C6 46.9812 4.76878 45.75 3.25 45.75H3C1.34315 45.75 0 44.4069 0 42.75V16.82C0 15.1631 1.34315 13.82 3 13.82H38.5C40.1569 13.82 41.5 12.4769 41.5 10.82V8.75C41.5 7.09315 40.1569 5.75 38.5 5.75Z"
                  />
                }
              </ClipPath>
            </Defs>
            <Rect
              width={"100%"}
              height={"100%"}
              fill="white"
              clipPath="url(#clip)"
            />
          </Svg>
        </View>
      }
    >
      {children}
    </MaskedView>
  )
}

export default PuzzleView;

