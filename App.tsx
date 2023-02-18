/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState, useCallback} from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
} from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SignupScreen from './app/screens/SignupScreen';
import VersionCheck from 'react-native-version-check';
import AnimationTest from './app/screens/AnimationTest';
import ProgressAnimation from './app/screens/ProgressAnimation';
import TestAnimation from './app/screens/TestAnimation';
import ScrollAnimation from './app/screens/ScrollAnimaiton';
Linking;

const updated_available = true;
const supportedURL = 'https://google.com';

function App(): JSX.Element {
  return (
    <>
      {/* <ProgressAnimation /> */}
      {/* <TestAnimation /> */}
      {/* <AnimationTest /> */}
      <ScrollAnimation />
    </>
  );
}

export default App;
