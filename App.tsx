import { SafeAreaView, StatusBar, View, } from 'react-native';
import React from 'react';
import TelaDeItens from './src/telas/TelaDeItens';
import SampleItens from './src/mock/sampleItens';
import SampleMercados from "./src/mock/sampleMercados";
import TelaDeMercados from './src/telas/TelaDeMercados';
import AppRotas from './src/rotas/AppRotas';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';


export default function App() {


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* <View>
        <MaterialIcons name="playlist-add" size={75} color={"#C7C7C7"} />
      </View> */}
      <AppRotas />
      {/* <TelaDeMercados /> */}
      {/* <TelaDeItens /> */}
    </SafeAreaView>
  );
}
