import homeStyle from '@/libs/submodules/home/styles/Home.style'
import { Text, View } from 'react-native'
import { WarningMessageType } from '@/libs/submodules/home/types/Home.type'

type WarningMessageProps = {
  warningMessage: WarningMessageType[]
}

const WarningMessage = ({ warningMessage }: WarningMessageProps) => (
  <View style={homeStyle.warningMessageContainer}>
    {warningMessage.map(message => (
      <View key={message.message}>
        <Text style={[homeStyle.warning]}>{message.message}</Text>
        {warningMessage.length === 1 && (
          <Text style={[homeStyle.regular]}>{message.suggestion}</Text>
        )}
      </View>
    ))}
  </View>
)
export default WarningMessage
