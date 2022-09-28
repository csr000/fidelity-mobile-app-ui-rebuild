import { Image, TouchableOpacity, Alert } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import qrcode from '../assets/img/qrcode.png';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';

function SubCard(props) {
  const { icon, name } = props;
  return (
    <Block backgroundColor="rgba(255, 255, 255, .9)" marginVertical={18} height={90} width={100} padding={10} borderRadius={15} elevation={5}>
      <TouchableOpacity>
        <Block center>{icon}</Block>
        <Text center color={colors.black} size={13} style={{ marginTop: 2 }}>
          {name}
        </Text>
      </TouchableOpacity>
    </Block>
  );
}

export default function Home() {
  const showAlert = () =>
    Alert.alert('Confirm', 'Do you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },

      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <SafeAreaView style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center' }}>
      {/* <LinearGradient colors={['rgba(0,0,0,0.6)', '#f58326']} locations={[0.5, 1.2]} style={{ position: 'absolute', height: 80, alignItems: 'center', width: '100%' }} /> */}
      <Block row spacebetween width="94%" margin={15} backgroundColor={colors.white} padding={10} borderRadius={10} elevation={1}>
        {/* icons will be inserted */}
        <Block row>
          <Text bold size={20} color={colors.orange} style={{ fontStyle: 'italic' }}>
            FIDELITY
          </Text>
          <Text size={20} color={colors.gray}>
            BANK
          </Text>
        </Block>
        <TouchableOpacity onPress={() => showAlert()}>
          <FontAwesome name="power-off" size={28} color={colors.black} />
        </TouchableOpacity>
      </Block>

      <Block middle center row>
        <Text size={30} color={colors.gray}>
          Hello,{' '}
        </Text>
        <Text bold size={30} color={colors.orange}>
          Jane.
        </Text>
      </Block>

      <Block center width="80%" margin={15} borderRadius={15} padding={10} backgroundColor={colors.white} elevation={2}>
        <Text color={colors.black} size={16}>
          Mr.
        </Text>
        <Text bold color={colors.black} size={25}>
          Jane Smith
        </Text>
        <Block row spacebetween center marginTop={2} width="85%">
          <TouchableOpacity style={{ backgroundColor: colors.orange, padding: 8, borderRadius: 20 }}>
            <Text color={colors.white}>My Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 5, borderColor: colors.black, borderRadius: 10 }}>
            <Image source={qrcode} style={{ width: 35, height: 35, borderRadius: 5 }} />
          </TouchableOpacity>
        </Block>
      </Block>

      <Block height="60%" width="90%">
        <Block row space="around">
          <SubCard name="Transfers" icon={<MaterialCommunityIcons name="bank-transfer" size={40} color="darkorange" />} />
          <SubCard name="Payments" icon={<MaterialIcons name="payments" size={36} color="darkorange" />} />
        </Block>
        <Block row space="around">
          <SubCard name="Airtime & Data" icon={<MaterialCommunityIcons name="account-cash" size={36} color="darkorange" />} />
          <SubCard name="Services" icon={<MaterialIcons name="contact-phone" size={36} color="darkorange" />} />
        </Block>
        <Block row space="around">
          <SubCard name="Payees" icon={<Entypo name="users" size={36} color="darkorange" />} />
          <SubCard name="View All" icon={<Entypo name="grid" size={40} color="darkorange" />} />
        </Block>
        <Block center>
          <Block row backgroundColor={colors.orange} padding={10} borderRadius={20} elevation={3}>
            <AntDesign name="customerservice" size={24} color={colors.white} />
            <Text color={colors.white}> Contact Customer Service</Text>
          </Block>
        </Block>
      </Block>
    </SafeAreaView>
  );
}
