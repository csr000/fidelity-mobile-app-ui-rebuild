import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';

function Card(props) {
  const { title } = props;
  return (
    <Block middle center margin={10} width={150} height={100} borderRadius={20} backgroundColor={colors.gray}>
      <Text>{title}</Text>
    </Block>
  );
}

function Row({ title1, title2 }) {
  return (
    <Block row>
      <Card title={title1} />
      <Card title={title2} />
    </Block>
  );
}

export default function Setting() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Block middle center flex={1}>
          <Block width={200} height={200} marginVertical={20} borderRadius={100} backgroundColor={colors.gray} />
          <Pressable
            style={{
              width: 200,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: colors.gray,
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <Text>View QR Code</Text>
          </Pressable>
          <Row title1="Update Product" title2="Application Update" />
          <Row title1="Update Accounts" title2="Sole Proprietor Accounts" />
          <Row title1="Pin Setup" title2="Biometrics" />
          <Row title1="App Reset" title2="Change Theme" />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
