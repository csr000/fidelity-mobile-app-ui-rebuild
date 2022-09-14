import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { AntDesign, Entypo } from "expo-vector-icons";

import Alert from '../screens/Alert';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Transaction from '../screens/Transaction';
import { colors } from '../components/theme';
import { flushSync } from 'react-dom';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
<<<<<<< HEAD:navigation/Navigator.jsx
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
=======
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel:false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height:130,
          borderRadius:40,
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
>>>>>>> c0fe4fd (tabbar icons included):navigation/Navigator.js
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Alert" component={Alert} />
    </Tab.Navigator>
  );
}
