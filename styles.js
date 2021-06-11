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
          backgroundColor: "grey",
          borderStyle: "solid",
          alignItems: "flex-start",
          justifyContent: "space-evenly"
      }
})