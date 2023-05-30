import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../../services/firebasecon';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

export default function Login(){

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    async function loginUsuario(){
      
      await signInWithEmailAndPassword(auth, email, senha).
       then(value=>{
         
         alert('Logado com sucesso!');
         navigation.navigate('home');
         

       }).catch(error=>alert(error));

       
    }

    async function cadUsuario(){
         await createUserWithEmailAndPassword(auth, email, senha).
         then(value=> {alert('Cadastrado com sucesso: '+value.user.uid)}
         ).catch(error=>alert(error));
    }

    return(

     <View style={styles.container}>
        <Text style={styles.texto}>Página de Login</Text> 

        <TextInput
           style={styles.input}
           placeholder='Digite seu e-mail'
           placeholderTextColor='grey'
           value={email}
           onChangeText={(value)=>{setEmail(value)}}
        />

        <TextInput
           style={styles.input}
           placeholder='Digite sua senha'
           placeholderTextColor='grey'
           secureTextEntry={true}
           value={senha}
           onChangeText={(value)=>{setSenha(value)}}
        />

        
        <TouchableOpacity style={styles.botao} onPress={()=>loginUsuario()}>
           <Text style={styles.textobtn}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={()=>cadUsuario()}>
           <Text style={styles.textobtn}>Cadastrar</Text>
        </TouchableOpacity>
        
     </View>

    );
}

const styles = StyleSheet.create({

   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center'
   },

   texto: {
     fontSize: 24
   },

   input: {
      width: '70%',
      height: 50,
      borderWidth: 1,
      fontSize: 20,
      padding: 10,
      marginTop: 20,
      borderRadius: 10
   },

   botao: {
      width: '60%',
      height: 50,
      backgroundColor: '#038cfc',
      marginTop: 20,
      justifyContent: 'center',
      alignItems: 'center'
   },

   textobtn: {

      fontSize: 24,
      color: '#fff'
   }

});