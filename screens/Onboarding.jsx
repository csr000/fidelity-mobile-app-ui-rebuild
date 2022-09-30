import { Image, TouchableOpacity, SafeAreaView, FlatList, Dimensions, Animated, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import data from '../services/onboarding/data';
import { colors } from '../components/theme';
import Block from '../components/Block';
import Text from '../components/Text';
import { useRef, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

//render item for flatlist
const renderItem = ({ item }) => (
  <Block center>
    <Image source={item.image} style={{ resizeMode: 'contain', width, justifyContent: 'center', marginTop: 10 }} />
    <Block>
      <Text center size={28} bold color={colors.orange} style={{ marginBottom: 10 }}>
        {item.title}
      </Text>
      <Text center size={18} color={colors.gray} style={{ paddingHorizontal: 64 }}>
        {item.description}
      </Text>
    </Block>
  </Block>
);

const OnboardingScreen = ({ navigation }) => {
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const Ref = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  

  //scroll to next slide function
  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
      Ref.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };

  //pagination 
  const Paginator = () => {
    return (
      <Block row height={100} middle>
        {data.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 40, 8],
            extrapolate: 'clamp',
          });
          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i.toString()}
              style={[
                { height: 4, borderRadius: 5, backgroundColor: colors.orange, marginHorizontal: 8 },
                { width: dotWidth, opacity },
              ]}
            />
          );
        })}
      </Block>
    );
  };


  return (
    <SafeAreaView style={{ backgroundColor: colors.black, height: '100%' }}>
      <Block style={{ backgroundColor: colors.white, height: '90%', borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false,
          })}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={Ref}
        />
        {Paginator()}
      </Block>

      <Block center>
        {currentIndex == data.length -1 ? (
        <TouchableOpacity style={{ width: '60%', height: '23%', backgroundColor: colors.orange, marginTop: -23, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }} onPress={()=> scrollTo()}>
          <Text color={colors.white} size={16}>
            Done
          </Text>
        </TouchableOpacity>
        ) :(
        <TouchableOpacity style={{ width: '60%', height: '23%', backgroundColor: colors.orange, marginTop: -23, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }} onPress={()=> scrollTo()}>
          <Text color={colors.white} size={16}>
            Next
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('TabNavigation')}>
          <Text color={colors.white} size={16} style={{ marginTop: 10 }}>
            Skip for now
          </Text>
        </TouchableOpacity>)
        }
        
        
      </Block>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
