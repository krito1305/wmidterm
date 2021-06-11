import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, TextInput, View, Button } from 'react-native';
import styles from "./styles";
import Box from "./Box.js"
import Box2 from './Box2';


export default function App() {
  const [number, onChangeNumber] = React.useState(0);
  const [message, setMessage] = React.useState("");

  function getSquare() {
    const squared = number*number;
    return `The square of ${number} is ${squared}`;

  }

  return (
    <View style={styles.container}>
      <Box>
      </Box>
      <Box2>
        <Text>Number 1:</Text>
        <Text>Number 2:</Text>
      </Box2>
    </View>
  );
}


/*<Text>Input a number:</Text>
<TextInput
  onChangeText={onChangeNumber}
  value={number}
  keyboardType="numeric" />


<Button
  title="Calc Square"
  onPress={() => setMessage(getSquare())}>
</Button>

<StatusBar style="auto" />
<Text>{message}</Text>*/