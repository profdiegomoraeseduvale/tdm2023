import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home(){

    const navigation = useNavigation();

    function irLogin(){
        navigation.navigate('login');
    }

    return(

     <View style={styles.container}>
        <Text style={styles.texto}>Página Home</Text>
        <Button title='Voltar Login' onPress={()=>irLogin()}/>
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
   }

});