import { Image, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';

const Dots = ({ selected }) => {
  let backgroundColor;

  backgroundColor = selected ? 'orange' : 'white';
  return (
    <Block
      style={{
        width: 6,
        height: 6,
        marginHorizontal: 3,
        backgroundColor,
        borderRadius: 3,
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
      bottomBarHighlight={false}
      titleStyles={{
        color: colors.black,
        height: 60,
        width: 300,
        padding: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: 100,
      }}
      subTitleStyles={{
        color: colors.black,
        height: 150,
        width: 300,
        padding: 25,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        fontSize: 12,
        letterSpacing: 1,
      }}
      onSkip={() => navigation.replace('TabNavigation')}
      onDone={() => navigation.navigate('TabNavigation')}
      pages={[
        {
          // image: <Image />,
          title: 'Demo',
          subtitle: 'Demo',
        },
        {
          // image: <Image />,
          title: 'Demo',
          subtitle: 'Demo',
        },
        {
          // image: <Image />,
          title: 'Demo',
          subtitle: 'Demo',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
