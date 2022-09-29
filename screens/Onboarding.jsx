import { Image, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? '#f58326' : 'transparent';
  return (
    <Block
      style={{
        width: 10,
        height: 10,
        marginHorizontal: 5,
        backgroundColor,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.orange,
      }}
    />
  );
};

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text size={12}>Skip for now</Text>
  </TouchableOpacity>
);

const Continue = ({ ...props }) => (
  <TouchableOpacity
    style={{
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}>
    <Text color={colors.black} size={12}>
      Continue
    </Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginHorizontal: 10,
      height: 40,
      width: 70,
      padding: 5,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    }}
    {...props}>
    <Text color={colors.black} size={12}>
      Done
    </Text>
  </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Continue}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      bottomBarColor="rgba(251, 192, 147, 0.9)"
      //bottomBarHighlight={false}
      titleStyles={{
        color: colors.black,
      }}
      subTitleStyles={{
        color: colors.black,
      }}
      imageContainerStyles={
        {
          //paddingTop: 200,
        }
      }
      onSkip={() => navigation.replace('TabNavigation')}
      onDone={() => navigation.navigate('TabNavigation')}
      pages={[
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/img/credit_payment.png')} />,
          title: 'Credit Card Payments',
          subtitle: 'Demo',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/img/mobile_money.png')} />,
          title: 'Mobile Pay',
          subtitle: 'Demo',
        },
        {
          backgroundColor: '#fff',
          image: <Image source={require('../assets/img/transfer_money.png')} />,
          title: 'Online Transactions',
          subtitle: 'Demo',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
