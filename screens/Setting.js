import { Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';

const Card = (props) => {
  return (
    // eslint-disable-next-line max-len, prettier/prettier
    <Block middle center margin={10} width={150} height={100} borderRadius={20} backgroundColor={colors.gray}>
      <Text>{props.title}</Text>
    </Block>
  );
};

const Row = ({ title1, title2 }) => {
  return (
    <Block row>
      <Card title={title1} />
      <Card title={title2} />
    </Block>
  );
};

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Block middle center flex={1}>
          <Block width={200} height={200} borderRadius={100} backgroundColor={colors.gray} />
          <Pressable
            style={{
              width: 200,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: colors.gray,
              justifyContent: 'center',
              margin: 5,
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

// const styles = StyleSheet.create({})
