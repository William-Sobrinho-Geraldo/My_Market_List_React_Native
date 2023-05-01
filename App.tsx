import {  SafeAreaView, StatusBar, } from 'react-native';
import React from 'react';
import TelaDeItens from './src/telas/TelaDeItens';
import SampleItens from './src/mock/sampleItens'

export default function App() {


  return  (
    <SafeAreaView style={ {flex:1 }}>
      <StatusBar />
      <TelaDeItens {...SampleItens} />
    </SafeAreaView>
  );
}
