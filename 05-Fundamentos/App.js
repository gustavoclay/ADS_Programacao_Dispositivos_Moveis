import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import PrimeiroComponente from './components/PrimeiroComponente'
import SegundoComponente from './components/SegundoComponente'
import TerceiroComponente from './components/TerceiroComponente';
import MultiplasLinhasComponente from './components/MultiplasLinhasComponente';
import JavascriptComponente from './components/JavascriptComponente';
import LoopComponente from './components/LoopComponente';

export default function App() {
  return (
    <View style={styles.container}>

      <PrimeiroComponente />
      <SegundoComponente />
      <TerceiroComponente />
      <MultiplasLinhasComponente />
      <JavascriptComponente />
      <LoopComponente />

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
