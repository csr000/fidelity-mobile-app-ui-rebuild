import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AntDesign, Entypo } from "expo-vector-icons";

import Alert from '../screens/Alert';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Transaction from '../screens/Transaction';
import { colors } from '../components/theme';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height:110,
          borderRadius:40,
          position:'absolute'
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarIcon:({}) =>(
          //   <Entypo name="home" size={30} color={color} />
          // )
        }}
      />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Alert" component={Alert} />
    </Tab.Navigator>
  );
}
