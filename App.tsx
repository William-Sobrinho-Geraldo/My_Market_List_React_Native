import { SafeAreaView, StatusBar, } from 'react-native';
import React from 'react';
import TelaDeItens from './src/telas/TelaDeItens';
import SampleItens from './src/mock/sampleItens'
import TelaDeMercados from './src/telas/TelaDeMercados';
import SampleMercados from "./src/mock/sampleMercados";

export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <TelaDeMercados {...SampleMercados }/>
      {/* <TelaDeItens {...SampleItens} /> */}
    </SafeAreaView>
  );
}
