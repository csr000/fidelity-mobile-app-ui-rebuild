import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Foundation, Feather } from 'expo-vector-icons';
import { TouchableOpacity } from 'react-native';

import Alert from '../screens/Alert';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Transaction from '../screens/Transaction';
import { colors } from '../components/theme';
import Block from '../components/Block';

const Tab = createBottomTabNavigator();

function TabBarCustomButton({ accessibilityState, children, onPress }) {
  const isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <Block flex={1} style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: colors.white,
            elevation: 5,
          }}
          onPress={onPress}>
          {children}
        </TouchableOpacity>
      </Block>
    );
  }
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: 'absolute',
          height: 70,
          bottom: 0,
          right: 0,
          left: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="home" size={30} color={color} />,
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({ color }) => <Foundation name="clipboard-notes" size={30} color={color} />,
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ color }) => <Feather name="settings" size={30} color={color} />,
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Alert"
        component={Alert}
        options={{
          tabBarIcon: ({ color }) => <Feather name="message-square" size={30} color={color} />,
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
