import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; 
import TelaDeMercados from "../telas/TelaDeMercados";
import TelaDeItens from "../telas/TelaDeItens";

const Stack = createNativeStackNavigator();

export default function MercadosRotas (){
    return <Stack.Navigator>
        <Stack.Screen name="Mercados" component={TelaDeMercados}/> 
        <Stack.Screen name="Itens" component={TelaDeItens}/> 
    </Stack.Navigator>
}
