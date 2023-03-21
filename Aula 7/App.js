import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

class AulaState extends Component {
  
  constructor(props){
     super(props)
     
     this.state = {
        nome : 'Fulano de Tal',
        inputnome : ''
     }

     this.mudarNome = this.mudarNome.bind(this);
     this.limparNome = this.limparNome.bind(this);
  }

  mudarNome(){
    this.setState({
      nome : this.state.inputnome
    })
  }

  limparNome(){
    this.setState({
      nome : '',
      inputnome : ''
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{this.state.nome}</Text>
      <TextInput 
        style={styles.input}
        placeholder='Digite o nome'
        placeholderTextColor='#fc5a03'
        value={this.state.inputnome}
        onChangeText={(texto)=> this.setState({inputnome : texto}) }       
                
      />
     
      <TouchableOpacity style={styles.botao} onPress={this.mudarNome}>
        <Text style={styles.txtbotao}>Mudar Nome</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={this.limparNome}>
        <Text style={styles.txtbotao}>Limpar Nome</Text>
      </TouchableOpacity>

    </View>
  );
  }
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

  botao: {
    width: '65%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15

  },

  txtbotao: {
    fontSize: 22,
    color: '#fff'
  }

 
});

export default AulaState;