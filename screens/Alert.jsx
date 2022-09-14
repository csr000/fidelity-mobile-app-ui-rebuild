import { FlatList, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';
import Nav from '../components/Nav';

const screenWidth = Dimensions.get('screen').width;

function Item({ title, date }) {
  return (
    <Block middle center margin={7} width={screenWidth - 20} height={100} borderRadius={20} backgroundColor={colors.gray}>
      <Text bold size={18}>
        {title}
      </Text>
      <Text>{date}</Text>
      <Text marginTop={10}>tap to read</Text>
    </Block>
  );
}

export default function Alert({ navigation }) {
  const DATA = [
    {
      id: '1',
      title: ' MAINTENANCE: FX Sale & MMI',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '2',
      title: ' Security Tip',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '3',
      title: 'GhanaPay',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '4',
      title: 'E-Levy Exemptions',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '5',
      title: ' GhanaCard',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '6',
      title: ' GhanaCard',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '7',
      title: ' Earn, Save, Invest - Repeat',
      date: ' 20:24 2022 - 09 - 05',
    },
    {
      id: '8',
      title: ' Mobile app downtime',
      date: ' 20:24 2022 - 09 - 05',
    },
  ];
  const renderItem = ({ item }) => <Item title={item.title} date={item.date} />;
  return (
    <SafeAreaView>
      <Nav navigation={navigation} title="Notifications" />
      <Block center>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: 150,
          }}
        />
      </Block>
    </SafeAreaView>
  );
}
