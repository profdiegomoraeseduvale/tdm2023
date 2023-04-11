import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [nome, setNome] = useState('Nome digitado');
  const [input, setInput] = useState('');

  function mudarNome(){
    setNome(input);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{nome}</Text>

      <TextInput 
        style={styles.input}
        value={input}
        onChangeText={(texto)=>setInput(texto)}
      
      />

      <TouchableOpacity style={styles.botao} onPress={mudarNome}>
        <Text style={styles.txtbotao}>Mudar Nome</Text>
      </TouchableOpacity>
      
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
    fontSize: 30
  },

  input : {
    width: "80%",
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 5,
    fontSize: 24,
    marginTop: 10
  },

  botao: {
    width: '80%',
    height: 50,
    backgroundColor: '#037ffc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  txtbotao: {
    fontSize: 24,
    color: '#fff'
  }
});
