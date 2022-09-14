import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation, Feather } from 'expo-vector-icons';

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
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height: 70,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          Outline: 'none',
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={30} color={color} />
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="clipboard-notes" size={30} color={color} />,
        }}
      />
      <Tab.Screen name="Setting" component={Setting} options={{
          tabBarIcon: ({ color }) =><Feather name="settings" size={30} color={color} />,
        }}  />
      <Tab.Screen name="Alert" component={Alert} 
      options={{
        tabBarIcon: ({ color }) => <Feather name="message-square" size={30} color={color} />,
      }} />
    </Tab.Navigator>
  );
}
