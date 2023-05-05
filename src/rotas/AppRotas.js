import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaDeMercados from "../telas/TelaDeMercados";
import TelaDeItens from "../telas/TelaDeItens";
import coresTabBar from "../cores/Cores";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
    const corIconesTabBarDesabilitado = coresTabBar.corIconesTabBarDesabilitado
    const corIconesTabBarHabilitado = coresTabBar.corIconesTabBarHabilitado
    const corBackgroundTabBar = coresTabBar.corBackgroundTabBar

    return <NavigationContainer>
        <Tab.Navigator screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: corIconesTabBarHabilitado,
            tabBarInactiveTintColor: corIconesTabBarDesabilitado,
            tabBarStyle:{
                backgroundColor: corBackgroundTabBar,
                position: "absolute",
                borderTopWidth: 0,

                bottom:14,
                marginHorizontal:12,
                elevation:0,
                borderRadius:4,
                height:50,
            },
            tabBarLabelStyle:{
                fontSize:15,
            }
            
        })}>
            <Tab.Screen name="Mercados" component={TelaDeMercados} options={{
                tabBarIcon: ({ color, focused }) => {
                    if (focused) {
                        return <MaterialIcons name="store-mall-directory" size={35} color={color} />
                    } else {
                        return <MaterialIcons name="store-mall-directory" size={35} color={color} />
                    }
                }
            }}
            />
            <Tab.Screen name="Itens" component={TelaDeItens} options={{
                tabBarIcon: ({ color,  focused }) => {
                    if (focused) {
                        return < MaterialIcons name="playlist-add" size={37} color={color} />
                    } else {
                        return < MaterialIcons name="playlist-add" size={37} color={color} />
                    }
                }
            }} />
        </Tab.Navigator>
    </NavigationContainer>
}

