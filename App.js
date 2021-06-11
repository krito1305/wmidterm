import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [number, onChangeNumber] = React.useState(0);
  const [message, setMessage] = React.useState("");

  function getSquare() {
    const squared = number*number;
    return `The square of ${number} is ${squared}`;

  }

  return (
    <View style={styles.container}>
      <Text>Input a number:</Text>
      <TextInput
        onChangeNumber={onChangeNumber}
        value={number}
        keyboardType="numeric" >
      </TextInput>
     
      <Button
        title="Calc Square"
        onPress={() => setMessage(getSquare())}>
      </Button>
      
      <StatusBar style="auto" />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
