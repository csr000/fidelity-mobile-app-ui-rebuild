import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Block from './Block';
import Text from './Text';

export default function Nav({ navigation, title }) {
  return (
    <Block spacebetween row margin={20} width="80%">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <Block center width="100%">
        <Text bold size={20}>
          {title}
        </Text>
      </Block>
    </Block>
  );
}
