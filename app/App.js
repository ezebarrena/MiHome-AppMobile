import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { translations } from '../localization';
import UserProfile from './ui/screens/userProfile/UserProfile.js'

import CardPropiedad from './ui/components/cardPropiedad/cardPropiedad';

import { NavigationContainer } from '@react-navigation/native';
import LandingStackNavigator from './navigation/LandingStackNavigator'


export default function App() {
  /*const i18n = new I18n(translations)
  const [locale, setLocale] = useState(Localization.locale);
  i18n.locale = locale
  i18n.enableFallback = true
  i18n.defaultLocale = "es"*/

  return (


    <View style={styles.container}>
      <UserProfile/>
    </View>
    
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});