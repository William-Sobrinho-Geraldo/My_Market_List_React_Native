import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaDeMercados from "../telas/TelaDeMercados";
import TelaDeItens from "../telas/TelaDeItens";
import coresTabBar from "../cores/Cores";

const Tab = createBottomTabNavigator();


export default function AppRotas (){
    const corIconesTabBarDesabilitado = coresTabBar.corIconesTabBarDesabilitado
    const corIconesTabBarHabilitado = coresTabBar.corIconesTabBarHabilitado

    return <NavigationContainer>
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: corIconesTabBarHabilitado ,
            tabBarInactiveTintColor:  corIconesTabBarDesabilitado,
            // tabBarLabelStyle: {estilos,tabBar},
            }
        }>
            <Tab.Screen name="TelaDeMercados" component={TelaDeMercados}  />
            <Tab.Screen name="TelaDeItens" component={TelaDeItens}  />
        </Tab.Navigator>
    </NavigationContainer>
}

const estilos = StyleSheet.create({
    tabBar:{

    }
})