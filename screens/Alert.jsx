import { FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';
import Nav from '../components/Nav';
import DATA from '../services/alert/data';

const screenWidth = Dimensions.get('screen').width;

export default function Alert({ navigation }) {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        borderBottomWidth: 1,
        borderColor: colors.gray,
        margin: 10,
        paddingBottom: 10,
        width: screenWidth - 25,
      }}>
      <Block row spacebetween padding={5}>
        <Text bold size={17}>
          {item.title}
        </Text>
        <Text>{item.time}</Text>
      </Block>

      <Block row spacebetween padding={5}>
        <Text color="grey">{item.date}</Text>
        <Text>{item.status}</Text>
      </Block>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <Nav navigation={navigation} title="Notifications" />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      />
    </SafeAreaView>
  );
}
