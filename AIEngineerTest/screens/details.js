import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"


export default function DetailsScreen({route, navigation}) {
    const { data } = route.params
    console.log("Data is"+ JSON.stringify(data))
    return (
        <View style = {detailStyles.container}>
            <Text> {JSON.stringify(data)}</Text>
        </View>
    )
}


const detailStyles = StyleSheet.create({
    container : {
        flex:1,
    }
})

