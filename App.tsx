import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { RootStackParamList } from './types';
import PaletteModal from './screens/PaletteModal';

const RootStack = createStackNavigator<RootStackParamList>();
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Group>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="ColorPalette"
            component={ColorPalette}
            options={({ route }) => ({ title: route.params.paletteName })}
          />
        </RootStack.Group>
        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="AddNewPalette" component={PaletteModal} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
