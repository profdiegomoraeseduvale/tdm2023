import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  async function buscarCep(){
    const response = await api.get(`/${cep}/json/`);
    setRua(response.data.logradouro);
    setBairro(response.data.bairro);
    setCidade(response.data.localidade);
    setEstado(response.data.uf);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um CEP para pesquisa</Text>
      <TextInput
      
       style={styles.input}
       value={cep}
       onChangeText={(texto)=> setCep(texto)}
      
      />

      <Button
       title='Buscar'
       onPress={buscarCep}
      />

      <Text style={styles.resultados}>Logradouro: {rua}</Text>
      <Text style={styles.resultados}>Bairro: {bairro}</Text>
      <Text style={styles.resultados}>Cidade: {cidade}</Text>
      <Text style={styles.resultados}>Estado: {estado}</Text>



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
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    paddingLeft: 10,
    marginBottom: 10,
    marginTop:10
  },

  titulo: {
    fontSize: 24
  },

  resultados: {
    fontSize: 24
  }
});
