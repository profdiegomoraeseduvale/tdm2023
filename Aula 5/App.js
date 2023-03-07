import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>App Login</Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite o e-mail'
        placeholderTextColor='#fc5a03'
        keyboardType='email-address'
                
      />
      <TextInput 
        style={styles.input}
        placeholder='Digite a senha'
        placeholderTextColor='#fc5a03'
        keyboardType='default'
        secureTextEntry={true}        
      />
      <Button 
       title='Logar'
      />    
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

  titulo : {
    fontSize: 30,
    fontWeight: 'bold'
  },

  input: {
    width: '80%',
    height: 50,
    borderWidth: 2,
    borderRadius: 10,
    fontSize: 25,
    paddingLeft: 10,
    marginTop: 15,
    marginBottom: 15
  },

 
});
