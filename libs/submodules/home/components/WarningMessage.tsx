import homeStyle from '@/libs/submodules/home/styles/Home.style'
import { Text, View } from 'react-native'
import { WarningMessageType } from '@/libs/submodules/home/types/Home.type'

type WarningMessageProps = {
  warningMessage: WarningMessageType
}

const WarningMessage = ({ warningMessage }: WarningMessageProps) => (
  <View style={homeStyle.warningMessageContainer}>
    <Text style={[homeStyle.warning]}>{warningMessage.message}</Text>
    <Text style={[homeStyle.regular]}>{warningMessage.suggestion}</Text>
  </View>
)
export default WarningMessage
