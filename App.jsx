import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './navigation/Tab';
import StackNavigator from './navigation/Stack';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
