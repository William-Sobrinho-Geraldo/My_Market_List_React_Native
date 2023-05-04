import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import TopoTelaDeMercados from "./componentes/TopoTelaDeMercados";

import sampleMercados from "../../mock/sampleMercados";


export default function TelaDeMercados() {
    return <>
        <FlatList
            keyExtractor={item => item.nomeMercado}
            data={sampleMercados.listaDeMercados}
            renderItem={({ item }) => {
                return <TouchableOpacity style={estilos.ViewRenderItem} >
                    <Text style={estilos.TextRenderItem}>{item.nomeMercado}</Text>
                </TouchableOpacity>
            }}

            ListHeaderComponent={TopoTelaDeMercados}

            ListFooterComponent={() => {return <View style={estilos.viewFooter} />}}
        />
    </>
}

const estilos = StyleSheet.create({
    TextRenderItem: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 26,
        lineHeight: 32,
    },
    ViewRenderItem: {
        elevation: 6,
        paddingVertical: 50,
        paddingHorizontal: 16,
        marginHorizontal: 16,
        marginVertical: 4,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "black",
        backgroundColor: "lightgray"
    },
    viewFooter: {
        marginBottom:8,
    }
})