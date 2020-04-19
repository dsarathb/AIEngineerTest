import React, { Component } from "react"

import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"

const SearchBar = (props) => {
    return (
        <View style = {searchBarStyles.container}>
            <TextInput style = {searchBarStyles.inputText} onChangeText = {(text) => props.onSearchTextChange(text)} placeholder = "Search" />
            <TouchableOpacity style = {searchBarStyles.button} onPress = {props.searchAction}>
                <Text> Search </Text> 
            </TouchableOpacity>
            <TouchableOpacity style = {searchBarStyles.button} onPress = {props.filterAction}>
               <Text> Filter </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const searchBarStyles = StyleSheet.create({
    container: {
        width : "100%",
        height: 60,
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : "center"
    },
    inputText: {
        borderStyle : "solid",
        width : "65%",
        height : 44,
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 6,
        paddingLeft: 10,
        fontSize : 17,
    },
    button: {
        width: "15%",
        height: 44,
        borderRadius : 6,
        borderWidth : 1,
        borderColor : "black",
        justifyContent: "center",
        alignItems : "center"
    },
    buttonText: {
        fontSize: 17,
        fontWeight : "bold"
    }

})