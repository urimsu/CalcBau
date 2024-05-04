import React from 'react'
import HomeButton from './components/HomeButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import CalculatorScreen from './components/Screens/CalculatorScreen';
import ReceiptScreen from './components/Screens/ReceiptScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  
      screenOptions={{
          title: 'My home',
          headerStyle: {
            backgroundColor: 'darkolivegreen',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "My Home",}}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{title: "Calculator",}}/>
        <Stack.Screen name="Rechnung" component={ReceiptScreen} options={{title: "Receipt",}}/>
      </Stack.Navigator>
    <HomeButton/>
    </NavigationContainer>     
  );
}



/* 
npx expo start
npm run ios
*/