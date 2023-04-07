import { FunctionComponent } from "react"
import { StyleSheet, TouchableOpacity } from "react-native"

const Pressable: FunctionComponent<{children: any, onPress: () => void }> = ({children, onPress}) => {
  const styles = StyleSheet.create({
    button: {
      border: "1px solid #000",
      borderRadius: 4,
      shadowColor: '#fff',
      flexDirection: 'row',
    }
  })
  return <TouchableOpacity style={styles.button} onPress={onPress}>
    {children}
  </TouchableOpacity>
}