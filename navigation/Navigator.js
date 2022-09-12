import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Alert from '../screens/Alert';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Transaction from '../screens/Transaction';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Transaction" component={Transaction} />
      <Tab.Screen name="Setting" component={Setting} />
      <Tab.Screen name="Alert" component={Alert} />
    </Tab.Navigator>
  );
}
