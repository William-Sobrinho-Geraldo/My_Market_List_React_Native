import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import TopoTelaDeItens from './componentes/TopoTelaDeItens';
import sampleItens from '../../mock/sampleItens';
import { useRoute } from "@react-navigation/native";


export default function TelaDeItens() {
  const route = useRoute();
  const mercadoClicado = route.params;  //pegando o nome do mercado que foi clicado na TelaDeMercados
    console.log("O mercado clicado foi:" , mercadoClicado ) 
  var listaCerta = sampleItens.itensDeExemplo.lista
  if(mercadoClicado === "Guanabara" ) { 
    listaCerta=sampleItens.itensDeExemplo.listaGuanabara
  } else if (mercadoClicado === "Prezunic") {
    listaCerta=sampleItens.itensDeExemplo.listaPrezunic
  } else if (mercadoClicado === "Extra") {
    listaCerta=sampleItens.itensDeExemplo.listaExtra
  } else if (mercadoClicado === "Assaí") {
    listaCerta=sampleItens.itensDeExemplo.listaAssaí
  } else if (mercadoClicado === "Super Market") {
    listaCerta=sampleItens.itensDeExemplo.listaSupermarket
  } else if (mercadoClicado === "Inter") {
    listaCerta=sampleItens.itensDeExemplo.listaInter
  } else if (mercadoClicado === "Pão de Açucar") {
    listaCerta=sampleItens.itensDeExemplo.listaPaoDeAcucar
  } else if (mercadoClicado === "Zona Sul") {
    listaCerta=sampleItens.itensDeExemplo.listaZonaSul
  } else if (mercadoClicado === "Costa Azul") {
    listaCerta=sampleItens.itensDeExemplo.listaCostaAzul
  }



  // function determinandoListaDeItens(mercadoClicado) {
  //   switch (mercadoClicado) {
  //     case 'Guanabara':
  //       listaCerta = sampleItens.itensDeExemplo.listaGuanabara
  //     break;
  //     case 'B':
  //       // código a ser executado se o valor for igual a 'B'
  //       break;
  //     case 'C':
  //       // código a ser executado se o valor for igual a 'C'
  //       break;
  //     default:
  //       // código a ser executado se o valor não for igual a 'A', 'B' ou 'C'
  //       break;
  //   }
  // }

    



  return <>
    <FlatList style={estilos.flatList}
      data={listaCerta}
      keyExtractor={item => item.nome}
      numColumns={2}
      horizontal={false}

      renderItem={({ item }) => {
        return <SafeAreaView style={estilos.item}>
          <Text style={estilos.textoDoItem}>{item.nome}</Text>
          <TouchableOpacity style={estilos.iconePlus}>
            <Icone name="plus" size={30} color="#000" />
          </TouchableOpacity>
        </SafeAreaView>
      }}

      ListHeaderComponent={() => { return <TopoTelaDeItens /> }}

      ListFooterComponent={() => { return <SafeAreaView style={estilos.flatList} /> }}
    />
  </>
}

const estilos = StyleSheet.create({
  flatList: { paddingBottom: 24 },
  textoDoItem: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    marginHorizontal: 8,
  },
  item: {
    flexDirection: "row",
    elevation: 6,
    flexGrow: 1,
    flex: 1,
    borderRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingTop: 8,
    paddingEnd: 8,
    marginTop: 10,
    marginStart: 8,
    marginEnd: 8,
    alignItems: "center",
    backgroundColor: 'lightgray',
    justifyContent: "space-between",
  },
  iconePlus: {
    marginBottom: 16,
  }
})


