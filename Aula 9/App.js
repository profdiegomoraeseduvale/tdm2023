import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class AulaState extends Component {
  
  constructor(props){
     super(props)    
     
     this.state = {
       frasetxt : 'Frase da Sorte',
       img : require('./assets/biscoito.png'),
       quebrou : false
     }

     this.frases = [
        'Frase 1',
        'Frase 2',
        'Frase 3',
        'Frase 4',
        'Frase 5'
     ]

     this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
     this.novoBiscoito = this.novoBiscoito.bind(this);
  } 
  
  quebrarBiscoito(){
     
    let aleatorio = Math.floor(Math.random()*this.frases.length);

     this.setState({
      frasetxt : this.frases[aleatorio],
      img : require('./assets/biscoitoAberto.png'),
      quebrou : true
     })
  }

  novoBiscoito(){
    this.setState({
      frasetxt : 'Frase da Sorte',
      img : require('./assets/biscoito.png'),
      quebrou : false
     })
  }

  render(){
  return (
    <View style={styles.container}>
      
      <Text style={styles.titulo}>{this.state.frasetxt}</Text>

      <Image 
      
       source={this.state.img}
       style={styles.img}
      
      />
      
      {!this.state.quebrou ? (
      <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
         <Text style={styles.txtbotao}>Quebrar</Text>
      </TouchableOpacity> ) : (null) }

      {this.state.quebrou ? (
      <TouchableOpacity style={styles.botao} onPress={this.novoBiscoito}>
         <Text style={styles.txtbotao}>Novo</Text>
      </TouchableOpacity> ) : (null) }
      

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

  img: {
    width:250,
    height: 250 
  },

  titulo : {
    fontSize: 30,
    fontWeight: 'bold'
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