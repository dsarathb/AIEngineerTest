import React from "react"

import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import HomeScreen from "../screens/home"
import DetailsScreen from "../screens/details"

const Stack = createStackNavigator()

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Home" component = {HomeScreen}/>
                <Stack.Screen name = "Details" component = {DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;