import { FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';
import Nav from '../components/Nav';

export default function Home({ navigation }) {
  const data = [
    {
      id: 1,
      title: 'Transfers',
      date: '14 Sep',
      status: <FontAwesome5 name="clock" size={22} color="grey" />,
      description: 'Wallet To Account',
      amount: '$100.00',
    },
    {
      id: 2,
      title: 'Transfers',
      date: '14 Sep',
      status: <AntDesign name="checkcircle" size={22} color="black" />,
      description: 'Wallet To Account',
      amount: '$100.00',
    },
    {
      id: 3,
      title: 'Subscriptions',
      date: '10 Sep',
      status: <AntDesign name="checkcircle" size={22} color="black" />,
      description: 'Netflix Premium Monthly Payment',
      amount: '$10.00',
    },
    {
      id: 4,
      title: 'Transfers',
      date: '8 Sep',
      status: <FontAwesome5 name="clock" size={22} color="grey" />,
      description: 'Wallet To Account',
      amount: '$80.00',
    },
    {
      id: 5,
      title: 'Subscriptions',
      date: '2 Sep',
      status: <AntDesign name="checkcircle" size={22} color="black" />,
      description: 'Apple Music Monthly Payment',
      amount: '$6.99',
    },
    {
      id: 6,
      title: 'Subscriptions',
      date: '2 Sep',
      status: <FontAwesome5 name="clock" size={22} color="grey" />,
      description: 'Spotify Monthly Payment',
      amount: '$10.99',
    },
    {
      id: 7,
      title: 'Transfers',
      date: '1 Sep',
      status: <FontAwesome5 name="clock" size={24} color="black" />,
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
        height: 100,
      }}>
      <Block padding={5}>
        <Text bold size={17}>
          {item.date}
        </Text>
        <Block row spacebetween marginTop={10}>
          <Text>{item.description}</Text>
          <Text>{item.amount}</Text>
        </Block>
      </Block>

      <Block row spacebetween padding={5}>
        <Text color={'grey'}>{item.title}</Text>
        <Text>{item.status}</Text>
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
