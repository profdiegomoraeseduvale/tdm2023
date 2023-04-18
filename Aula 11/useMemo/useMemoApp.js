import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Quadrado from './components/quadrado';


function ExemploUseMemo() {
  const [numero, setNumero] = useState('');

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        value={numero} 
        onChangeText={setNumero} 
        keyboardType='numeric' 
      />
      
      <Quadrado numero={numero} />
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

  input: {
    width: '40%',
    height: 50,
    borderWidth: 1
  }
});

export default ExemploUseMemo;