import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login(){

    const navigation = useNavigation();

    function irHome(){
       navigation.navigate('home');
    }

    return(

     <View style={styles.container}>
        <Text style={styles.texto}>Página de Login</Text>
        <Button title="Ir para Home" onPress={()=>irHome()}/>
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