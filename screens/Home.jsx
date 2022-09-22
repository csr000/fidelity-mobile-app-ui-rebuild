import { Image, TouchableOpacity, Dimensions, Alert, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import mastercard from '../assets/img/mastercard.png';
import { LinearGradient } from 'expo-linear-gradient';
import qrcode from '../assets/img/qrcode.png';
import { colors } from '../components/theme';
import { Entypo, FontAwesome5, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import Block from '../components/Block';
import Text from '../components/Text';
import homebg from '../assets/img/home.jpeg';

function SubCard(props) {
  const { icon, name } = props;
  return (
    <TouchableOpacity>
      <Block backgroundColor={'rgba(255, 255, 255, .9)'} marginTop={10} height={90} width={100} padding={10} borderRadius={15}>
        <Block center>{icon}</Block>
        <Text center color={colors.black} size={13} style={{ marginTop: 2 }}>
          {name}
        </Text>
      </Block>
    </TouchableOpacity>
  );
}

export default function Home({ navigation }) {
  const showAlert = () =>
    Alert.alert('Confirm', 'Do you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
      },

      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  return (
    <SafeAreaView style={{ height: '100%', width: '100%', display: 'flex' }}>
      <LinearGradient colors={['rgba(0,0,0,0.6)', '#f58326']} locations={[0.5, 1.2]} style={{ position: 'absolute', height: 80, alignItems: 'center', width: '100%' }} />
      <Block row spacebetween margin={15} marginBottom={0}>
        <TouchableOpacity>
          <FontAwesome5 name="user" size={28} color={colors.white} />
        </TouchableOpacity>
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
          <FontAwesome name="power-off" size={28} color={colors.white} />
        </TouchableOpacity>
      </Block>

      <ImageBackground source={homebg} style={{ height: '100%', width: '100%' }}>
        <Block middle center row>
          <Text size={30} color={colors.gray}>
            Hello,{' '}
          </Text>
          <Text bold size={30} color={colors.orange}>
            John
          </Text>
        </Block>
        <Block center width="92%" height={110} margin={15} borderRadius={10} backgroundColor={'rgba(255, 255, 255, .9)'}>
          <Text color={colors.black} size={16}>
            Mr.
          </Text>
          <Text bold color={colors.black} size={25}>
            John Doe
          </Text>
          <Block row spacebetween center marginTop={2} style={{ width: '85%' }}>
            <TouchableOpacity style={{ backgroundColor: colors.orange, padding: 8, borderRadius: 5 }}>
              <Text color={colors.white}>My Accounts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth: 5, borderColor: colors.black, borderRadius: 10 }}>
              <Image source={qrcode} style={{ width: 35, height: 35, borderRadius: 5 }} />
            </TouchableOpacity>
          </Block>
        </Block>

        <Block row spacebetween margin={10}>
          <SubCard name="Transfers" icon={<MaterialCommunityIcons name="bank-transfer" size={40} color="darkorange" />} />
          <SubCard name="Payments" icon={<MaterialIcons name="payments" size={36} color="darkorange" />} />
          <SubCard name="Airtime & Data" icon={<MaterialCommunityIcons name="account-cash" size={36} color="darkorange" />} />
        </Block>
        <Block row spacebetween margin={10}>
          <SubCard name="My Payees" icon={<Entypo name="users" size={36} color="darkorange" />} />
          <SubCard name="Account Services" icon={<MaterialIcons name="contact-phone" size={36} color="darkorange" />} />
          <SubCard name="View All" icon={<Entypo name="grid" size={40} color="darkorange" />} />
        </Block>
      </ImageBackground>
    </SafeAreaView>
  );
}

