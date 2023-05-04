import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function TopoTelaDeMercados () {
    return <SafeAreaView>
        <Text style={estilos.cabecalho}>My Market List</Text>
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    cabecalho: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop:16,
        marginBottom: 8,
        textAlign: "center",
        color: "#2e2e3c"
      },
})