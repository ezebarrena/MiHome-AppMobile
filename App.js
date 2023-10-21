
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { translations } from './localization';
import UserProfile from './app/ui/screens/userProfile/UserProfile.js'
import RealEstateProfile from './app/ui/screens/realEstateProfile/RealEstateProfile'

import CardPropiedad from './app/ui/components/cardPropiedad/cardPropiedad';


import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from './app/navigation/MainStackNavigator';
import { LandingStackNavigator } from './app/navigation/LandingStackNavigator'

export default function App() {
  return (


    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>

  );
}
