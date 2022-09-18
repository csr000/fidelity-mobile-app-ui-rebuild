import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DATA from '../services/transaction/data';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';
import Nav from '../components/Nav';

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
      <LinearGradient colors={['rgba(0,0,0,0.6)', '#f58326']} locations={[0.35, 0.9]} style={{ height: 80, alignItems: 'center', width: '100%', position: 'absolute' }}>
        <Text size={18} color={colors.white} style={{ marginTop: 30 }}>
          Transactions
        </Text>
        {/* <Nav navigation={navigation} title="History"  /> */}
      </LinearGradient>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 2,
          paddingBottom: 150,
          marginTop: 50,
        }}
      />
    </SafeAreaView>
  );
}
