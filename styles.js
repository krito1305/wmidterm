import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      box1: {
          height: 300,
          width: 500,
          backgroundColor: "darkcyan",
          borderStyle: "solid",
          alignItems: "center",
          justifyContent: "center",
          borderTopRightRadius:5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5
      },
      header: {
          color: "white",
          fontSize:48,
          fontWeight: "bold",
          margin:10
      },
      header2: {
        color: "white",
        fontSize: 24   
      },
      box2: {
          height: 300,
          width: 500,
          backgroundColor: "white",
          borderStyle: "solid",
          borderColor: "black",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          paddingLeft:20,
          paddingRight: 20
      },
      button: {
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "blue"
      },
      boxInput: {
          height: 30,
          alignSelf: "stretch",
          borderColor: "grey",
          borderWidth: 1,
          borderTopRightRadius:5,
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5
      }

})