import { FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';

const screenWidth = Dimensions.get('screen').width;

function Item({ title }) {
  return (
    <Block middle center margin={10} width={screenWidth - 20} height={100} borderRadius={20} backgroundColor={colors.gray}>
      <Text>{title}</Text>
    </Block>
  );
}

export default function Alert() {
  const DATA = [
    {
      id: '1',
      title: ' Item',
    },
    {
      id: '2',
      title: ' Item',
    },
    {
      id: '3',
      title: ' Item',
    },
    {
      id: '4',
      title: ' Item',
    },
    {
      id: '5',
      title: ' Item',
    },
    {
      id: '6',
      title: ' Item',
    },
    {
      id: '7',
      title: ' Item',
    },
    {
      id: '8',
      title: ' Item',
    },
  ];
  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <SafeAreaView>
      <Block center>
        <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </Block>
    </SafeAreaView>
  );
}
