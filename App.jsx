import { NavigationContainer } from '@react-navigation/native';

import TabNavigation from './navigation/Navigator';
import StackNavigator from './navigation/Stack';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
