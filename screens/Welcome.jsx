import { TouchableOpacity } from 'react-native';
import Block from '../components/Block';
import Text from '../components/Text';

export default function Welcomescreen({ navigation }) {
  return (
    <Block>
      <Block center marginTop={100}>
        <Text>HELLO</Text>
      </Block>
      <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
        <Text center>Continue</Text>
      </TouchableOpacity>
    </Block>
  );
}
