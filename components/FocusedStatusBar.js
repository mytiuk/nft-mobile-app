import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/core'


export const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar animated={true} hidden={false}  {...props}/> : null
}
