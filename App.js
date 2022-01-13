import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import RagisterScreen from './screen/RagisterScreen';
import ChatScreen from './screen/ChatScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Ragister" component={RagisterScreen}/>
      <Stack.Screen name="Chat" component={ChatScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
