import { TouchableOpacity } from 'react-native';
import Block from './Block';
import Text from './Text';

export default function Nav({ navigation, title }) {
  return (
    <Block spacebetween row margin={20} width="90%">
      <TouchableOpacity onPress={() => navigation.goBack()} />
      <Block center width="100%">
        <Text bold size={20}>
          {title}
        </Text>
      </Block>
    </Block>
  );
}
