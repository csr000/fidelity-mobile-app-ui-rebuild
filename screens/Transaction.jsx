import { FlatList, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';
import Nav from '../components/Nav';

export default function Home({ navigation }) {
  const data = [
    {
      id: 1,
      title: 'Transfers',
      date: '14 Sep',
      status: 'Completed',
      description: 'Wallet To Account',
      amount: '$100.00',
    },
    {
      id: 2,
      title: 'Transfers',
      date: '14 Sep',
      status: 'Completed',
      description: 'Wallet To Account',
      amount: '$100.00',
    },
    {
      id: 3,
      title: 'Subscriptions',
      date: '10 Sep',
      status: 'Completed',
      description: 'Netflix Premium Monthly Payment',
      amount: '$10.00',
    },
    {
      id: 4,
      title: 'Transfers',
      date: '8 Sep',
      status: 'Completed',
      description: 'Wallet To Account',
      amount: '$80.00',
    },
    {
      id: 5,
      title: 'Subscriptions',
      date: '2 Sep',
      status: 'Completed',
      description: 'Apple Music Monthly Payment',
      amount: '$6.99',
    },
    {
      id: 6,
      title: 'Subscriptions',
      date: '2 Sep',
      status: 'Completed',
      description: 'Spotify Monthly Payment',
      amount: '$10.99',
    },
    {
      id: 7,
      title: 'Transfers',
      date: '1 Sep',
      status: 'Completed',
      description: 'Wallet To Account',
      amount: '$4.90',
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        margin: 10,
        height: 90,
      }}>
      <Block backgroundColor={colors.gray} padding={5}>
        <Text bold size={15}>
          {item.title}
        </Text>
        <Block row spacebetween marginTop={5}>
          <Text>{item.date}</Text>
          <Text>{item.status}</Text>
        </Block>
      </Block>

      <Block row spacebetween marginTop={10}>
        <Text>{item.description}</Text>
        <Text>{item.amount}</Text>
      </Block>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Nav navigation={navigation} title="History" />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 2,
          paddingBottom: 150,
        }}
      />
    </SafeAreaView>
  );
}
