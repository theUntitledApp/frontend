import { FunctionComponent } from "react";
import { Svg, Path, ClipPath, Defs, G, Image } from 'react-native-svg'
import { Platform } from 'react-native'

type PuzzleContentProp = {
  source: string
}

const PuzzleContent: FunctionComponent<PuzzleContentProp> = ({ source }) => {
  return (

    <Svg width="100%" height="100%" viewBox={"0 0 50 66"} preserveAspectRatio="xMidYMid meet">
      <Defs>
        <ClipPath id="clip">
          <Path
            d="M33.3764 0H3C1.34315 0 0 1.34315 0 3V6.42857C0 8.08543 1.34314 9.42857 3 9.42857H26.4944C28.1512 9.42857 29.4944 10.7717 29.4944 12.4286V17.1553C29.4944 18.8121 28.1512 20.1553 26.4944 20.1553H24.4888C22.8319 20.1553 21.4888 21.4984 21.4888 23.1553V23.7143C21.4888 25.3711 20.1456 26.7143 18.4888 26.7143H3C1.34315 26.7143 0 28.0574 0 29.7143V31.5031C0 33.16 1.34315 34.5031 3 34.5031H5.56742C7.22427 34.5031 8.56742 35.8463 8.56742 37.5031V39.7702C8.56742 41.427 7.22427 42.7702 5.56741 42.7702H3C1.34315 42.7702 0 44.1133 0 45.7702V63C0 64.6569 1.34314 66 3 66H38.4326C40.0894 66 41.4326 64.6569 41.4326 63V61.0745C41.4326 59.4177 40.0894 58.0745 38.4326 58.0745H25.9716C24.349 58.0745 23.0337 56.7592 23.0337 55.1366C23.0337 53.5141 24.349 52.1988 25.9716 52.1988H47C48.6569 52.1988 50 50.8556 50 49.1988V12.4286C50 10.7717 48.6569 9.42857 47 9.42857H39.3764C37.7196 9.42857 36.3764 8.08542 36.3764 6.42857V3C36.3764 1.34315 35.0333 0 33.3764 0Z"
          />
        </ClipPath>

      </Defs>
      {Platform.OS === 'ios' ? (
        <G clipPath="url(#clip)">
          <Image
            width="100%"
            height="100%"
            href={{ uri: source }}
          />
        </G>

      ) : (
        <Image
          width="100%"
          height="100%"
          href={{ uri: source }}
          clipPath="url(#clip)"
        />

      )}
    </Svg>

  )
}

export default PuzzleContent;
