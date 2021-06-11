import React from "react"; 
import {Text, View} from "react-native";
import styles from "./styles" 

export default function Box() {
 
    return(
    <View style={styles.box1}>
        <Text style={styles.header}>Midterm Exam</Text>
        <Text style={styles.header2}> Compare two numbers</Text>
    </View>
        );
}