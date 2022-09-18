import { Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import mastercard from '../assets/img/mastercard.png';
import { LinearGradient } from 'expo-linear-gradient';
import qrcode from '../assets/img/qrcode.png';
import { colors } from '../components/theme';
import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import Block from '../components/Block';
import Text from '../components/Text';

function Card(props) {
  const { title } = props;
  return (
    <Block center>
      <Block width={30} height={30} borderRadius={15} backgroundColor={colors.orange} center middle>
        <Entypo name="grid" size={24} color={colors.white} />
      </Block>
      <Text color={colors.black} size={12} style={{ width: 70, textAlign: 'center' }}>
        {title}
      </Text>
    </Block>
  );
}
function Row({ title1, title2, title3 }) {
  return (
    <Block row spacebetween margin={10} height={70}>
      <Card title={title1} />
      <Card title={title2} />
      <Card title={title3} />
    </Block>
  );
}

// function SubCard(props) {
//   const { image, name, amount } = props;
//   return (
//     <Block backgroundColor={colors.black} marginTop={10} height={130} width={110} padding={10} borderRadius={15}>
//       <Block>
//         <Image source={image} style={{ width: 90, height: 60 }} />
//       </Block>
//       <Text color={colors.white} style={{ marginTop: 10 }}>
//         {name}
//       </Text>
//       <Text color={colors.white} style={{ marginTop: 5 }}> -{amount}</Text>
//     </Block>
//   );
// }
export default function Home() {
  const sliderWidth = Dimensions.get('window').width;
  let carousel;
  const [activeNumber, setActiveNumber] = useState(0);
  const [carouselList, setCarouselList] = useState([
    {
      image: <Image source={mastercard} />,
    },
    {
      image: <Image source={mastercard} />,
    },
    {
      image: <Image source={mastercard} />,
    },
  ]);

  return (
    <SafeAreaView style={{ height: '100%', width: '100%', display: 'flex' }}>
      <Block row spacebetween marginLeft={15}>
        {/* icons will be inserted */}
        <Block row>
          <Text bold size={20} color={colors.orange}>
            Fidelity
          </Text>
          <Text size={20} color={colors.gray}>
            Bank
          </Text>
        </Block>
      </Block>

      <Block middle center row marginTop={8}>
        <Text size={30} color={colors.gray}>
          Hello,{' '}
        </Text>
        <Text bold size={30} color={colors.orange}>
          John
        </Text>
      </Block>

      <Block center width="92%" height={160} margin={15} borderRadius={10} backgroundColor={colors.white} style={{ elevation: 2 }}>
        <Text color={colors.black} size={16} style={{ marginTop: 10 }}>
          Mr.
        </Text>
        <Text bold color={colors.black} size={25}>
          John Doe
        </Text>
        <Block row spacebetween center marginTop={30} style={{ width: '85%' }}>
          <TouchableOpacity style={{ backgroundColor: colors.orange, padding: 10, borderRadius: 5 }}>
            <Text color={colors.white}>My Accounts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 5, borderColor: colors.black, borderRadius: 10 }}>
            <Image source={qrcode} style={{ width: 40, height: 40, borderRadius: 5 }} />
          </TouchableOpacity>
        </Block>
      </Block>

      <LinearGradient
        colors={['rgba(0,0,0,0.2)', '#f58326']}
        locations={[0.1, 0.9]}
        style={{ position: 'absolute', bottom: '0%', height: '50%', alignItems: 'center', width: '100%', borderRadius: 20 }}
      />

      <Block center>
        <Text size={20} bold>
          Your Cards
        </Text>
        <Carousel
          layout={'default'}
          //ref={(ref) => (carousel = ref)}
          activeAnimationType={'spring'}
          data={carouselList}
          sliderWidth={sliderWidth}
          itemWidth={250}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveNumber(index)}
        />
        <Pagination
          dotsLength={carouselList.length}
          activeDotIndex={activeNumber}
          containerStyle={{ backgroundColor: 'transparent', height: 1, width: 1 }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.black,
          }}
          inactiveDotStyle={{
            backgroundColor: colors.black,
          }}
          inactiveDotOpacity={0.6}
          inactiveDotScale={0.6}
        />
      </Block>

      <Block backgroundColor={colors.white} marginLeft={15} borderRadius={10} width="92%">
        <Row title1="Transfers" title2="Payments" title3="Airtime & Data" />
        <Row title1="My Payees" title2="Account Services" title3="View All" />
      </Block>
    </SafeAreaView>
  );
}

const renderItem = ({ item, index }) => {
  return (
    <TouchableOpacity style={{ marginTop: -60, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ height: 220, width: '100%', justifyContent: 'center' }}>{item.image}</Text>
    </TouchableOpacity>
  );
};
