import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { translations } from '../localization';
import Welcome from './ui/screens/landing/Welcome.js'

export default function App() {
  /*const i18n = new I18n(translations)
  const [locale, setLocale] = useState(Localization.locale);
  i18n.locale = locale
  i18n.enableFallback = true
  i18n.defaultLocale = "es"*/

  return (
    <View style={styles.container}>
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});