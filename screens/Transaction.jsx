import { FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';
import Nav from '../components/Nav';
import DATA from '../services/transaction/data';

export default function Home({ navigation }) {
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
        <Text color="grey">{item.title}</Text>
        <Text>{item.status}</Text>
      </Block>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <Nav navigation={navigation} title="History" />
      <FlatList
        data={DATA}
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
