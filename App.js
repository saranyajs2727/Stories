import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabView from './src/Components/BottomTabView';
import Status from './src/Components/Status';
import Home from "./src/Components/Home"
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
    {/* <Stack.Screen name="BottomTabView" component={BottomTabView} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Status" component={Status} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default App