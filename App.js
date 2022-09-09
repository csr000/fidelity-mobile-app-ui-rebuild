import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Alert from './screens/Alert';
import Home from './screens/Home';
import Setting from './screens/Setting';
import Transaction from './screens/Transaction';

// const Stack = createNativeStackNavigator();
const Stack = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Alert" component={Alert} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
