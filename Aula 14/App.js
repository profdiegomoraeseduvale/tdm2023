import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DATA from './src/data';
import { FlashList } from '@shopify/flash-list';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo FlashList</Text>
      <FlashList 
       
       data={DATA}
       renderItem={({item})=>(
         
         <TouchableOpacity style={styles.botao}>
           <View>
            <Text style={styles.item}>{item.id}</Text>  {/* asdasdasdasd */}
            <Text style={styles.itemtitulo}>{item.titulo}</Text>
            <Text style={styles.item}>{item.descricao}</Text>
           </View>
         </TouchableOpacity>

       )}
      
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },

  titulo: {
    fontSize: 24
  },

  item: {
    fontSize: 30,
    paddingLeft:5 
  },

  itemtitulo: {
    fontSize: 30,
    paddingLeft:5,
    fontWeight: 'bold'
  },

  botao: {
    marginTop: 20,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: 'blue',
    height: 200,
    borderRadius: 6
  }
});
