import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Image } from 'react-native';
import Block from '../components/Block';
import Text from '../components/Text';
import qrcode from '../assets/img/qrcode.png'

export default function Home() {
  return (
    <SafeAreaView style={styles.homecontainer}>
    <Block style={styles.header}>
      {/* beginning of header section */}
      <Block>
        <Text>Fidelity</Text>
        <Text>Bank</Text>
      </Block>
    </Block>

    <Block>
      <Text>Hello, Richard</Text>
    </Block>
    
    <Block>
      <Text>Mr.</Text>
      <Text>Antwi Richard</Text>
      <Block>
        <Text>My Accounts</Text>
        <Block>
        <Image source={qrcode} />
        </Block>
      </Block>
    </Block>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homecontainer: {
    height:'100%',
    width:'100%',
    display:'flex',
  }
})
