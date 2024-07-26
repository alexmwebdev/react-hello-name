import { useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import FirstScreen from './FirstScreen'; 
import SecondScreen from './SecondScreen'; 
  
const Stack = createNativeStackNavigator(); 
  
export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator 
        screenOptions={{ 
          headerStyle: { 
            backgroundColor: '#FFF', 
          }, 
          headerTintColor: '#000', 
        }}> 
        <Stack.Screen name="Home" component={FirstScreen} /> 
        <Stack.Screen name="Message" component={SecondScreen} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}