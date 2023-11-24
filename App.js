import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './app/navigation/MainStackNavigator';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
