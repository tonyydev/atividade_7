import { StatusBar } from "expo-status-bar";
import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [palavra, setPalavra] = useState('');

  return (
    <View style={styles.container}>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Texto"
        onChangeText={setPalavra}
      />

      {
        palavra == 'Ligado'
        ?
        <Text>Apresentando o texto!</Text>
        :
        <Text></Text>
      }

  <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
