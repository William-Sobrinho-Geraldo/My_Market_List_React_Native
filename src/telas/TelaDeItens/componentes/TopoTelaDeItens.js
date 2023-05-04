import React , { useState } from "react";
import { StyleSheet , SafeAreaView , Text , TextInput} from "react-native";

export default function TopoTelaDeItens (){
    const [text, onChangeText] = useState('');

    return <SafeAreaView >
    <Text style={estilos.cabecalho}>My Market List</Text>
    <TextInput
      style={estilos.caixaDeTexto}
      onChangeText={onChangeText}
      value={text}
      placeholder='Buscar Itens'
    />
  </SafeAreaView>

}

const estilos = StyleSheet.create({
    caixaDeTexto: {
        borderRadius: 15,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 8,
      },
      cabecalho: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop:16,
        marginBottom: 8,
        textAlign: "center",
        color: "#2e2e3c"
      },
})
