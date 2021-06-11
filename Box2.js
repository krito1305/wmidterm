import React from "react"; 
import {Text, TextInput, Button, View} from "react-native";
import styles from "./styles" 

export default function Box2() {
    const [number1, onChangeNumber] = React.useState(0);
    const [number2, onChangeNumber2] = React.useState(0);
    
    function validNumber(){
        onChangeNumber(parseInt(first), number1)
        onChangeNumber2(parseInt(second), number2)

        if (first < 2 && first > 100) {
            if (second < 2 && second > 100) {
                
                return`Invalid input, please try again`
            }
        }
    }


    return(
    <View style={styles.box2}>
        <Text>Number 1:</Text>
        <TextInput 
            style={styles.boxInput}
            onChangeText={validNumber}
            value={number1}
            keyboardType="numeric"
        ></TextInput>
        <Text>Number 2:</Text>
        <TextInput 
            style={styles.boxInput}
            onChangeText={() => setMessage(validNumber())}
            value={number2}
            keyboardType="numeric"
        ></TextInput>
        <Button 
        style={styles.button} 
        title="compare"
        //onPress={() => setMessage(runCompare())}
        ></Button>
    </View>
        );
}

 
