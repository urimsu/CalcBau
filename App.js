import React from 'react'
import HomeButton from './components/HomeButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/Screens/HomeScreen';
import CalculatorScreen from './components/Screens/CalculatorScreen';
import ReceiptScreen from './components/Screens/ReceiptScreen';
import PflasterSteineScreen from './components/Screens/PflasterSteineScreen';
import GartenpflegeScreen from './components/Screens/GartenpflegeScreen';
import SteinInfoScreen from './components/Screens/SteinInfoScreen';
import GartenBauScreen from './components/Screens/GartenBauScreen';
import KantenSteinScreen from './components/Screens/KantenSteinScreen';
import ZaunBauScreen from './components/Screens/ZaunBauScreen';
import ArbeitsstundenScreen from './components/Screens/ArbeitsstundenScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'  
      screenOptions={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#D0E4C3',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "My Home",}}/>
        <Stack.Screen name="Calculator" component={CalculatorScreen} options={{title: "Calculator",}}/>
        <Stack.Screen name="Rechnung" component={ReceiptScreen} options={{title: "Receipt",}}/>
        <Stack.Screen name="Pflaster Steine" component={PflasterSteineScreen} options={{title: "PflasterSteine",}}/>
        <Stack.Screen name="Gartenpflege" component={GartenpflegeScreen} options={{title: "Gartenpflege",}}/>
        <Stack.Screen name="Stein Information" component={SteinInfoScreen} options={{title: "SteinInformation",}}/>
        <Stack.Screen name="Gartenbau" component={GartenBauScreen} options={{title: "Gartenbau",}}/>
        <Stack.Screen name="Kantensteine" component={KantenSteinScreen} options={{title: "Kantensteine",}}/>
        <Stack.Screen name="Zaunbau" component={ZaunBauScreen} options={{title: "Zaunbau",}}/>
        <Stack.Screen name="Arbeitsstunden" component={ArbeitsstundenScreen} options={{title: "Arbeitsstunden",}}/>

      </Stack.Navigator>
    <HomeButton/>
    </NavigationContainer>     
  );
}



/* 
npx expo start
npm run ios
*/