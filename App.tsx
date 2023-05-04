import { SafeAreaView, StatusBar, } from 'react-native';
import React from 'react';
import TelaDeItens from './src/telas/TelaDeItens';
import SampleItens from './src/mock/sampleItens';
import SampleMercados from "./src/mock/sampleMercados";
import TelaDeMercados from './src/telas/TelaDeMercados';
import AppRotas from './src/rotas/AppRotas';

export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <AppRotas />
      {/* <TelaDeMercados /> */}
      {/* <TelaDeItens /> */}
    </SafeAreaView>
  );
}
