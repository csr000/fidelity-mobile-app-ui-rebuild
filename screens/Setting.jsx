import { Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Block from '../components/Block';
import Text from '../components/Text';
import { colors } from '../components/theme';
import Nav from '../components/Nav';

import profile from '../assets/profile.jpg';

function Card({ title }) {
  return (
    <Block middle center margin={10} width={150} height={100} borderRadius={20} backgroundColor={colors.white} elevation={5}>
      <TouchableOpacity
        style={{
          width: 150,
          height: 100,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text bold color={colors.orange}>
          {title}
        </Text>
      </TouchableOpacity>
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

export default function Setting({ navigation }) {
  return (
    <SafeAreaView>
      <Nav navigation={navigation} title="Account Setting" />
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        <Block middle center flex={1} paddingBottom={150}>
          {/* <Block width={200} height={200} marginBottom={10} borderRadius={100} backgroundColor={colors.gray} /> */}
          <Image
            source={profile}
            style={{
              width: 150,
              height: 150,
              marginBottom: 10,
              borderRadius: 100,
              backgroundColor: colors.gray,
            }}
          />
          <TouchableOpacity
            style={{
              width: 200,
              height: 40,
              borderRadius: 10,
              alignItems: 'center',
              backgroundColor: colors.orange,
              justifyContent: 'center',
              marginBottom: 5,
              elevation: 5,
            }}>
            <Text bold color={colors.white}>click to show account details</Text>
          </TouchableOpacity>
          <Row title1="Update Product" title2="Application Update" />
          <Row title1="Update Accounts" title2="Sole Proprietor Accounts" />
          <Row title1="Pin Setup" title2="Biometrics" />
          <Row title1="App Reset" title2="Change Theme" />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
