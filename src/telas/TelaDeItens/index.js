import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import TopoTelaDeItens from './componentes/TopoTelaDeItens';



export default function TelaDeItens({ itensDeExemplo }) {


  return <>
    <FlatList style={estilos.flatList}
      data={itensDeExemplo.lista}
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


