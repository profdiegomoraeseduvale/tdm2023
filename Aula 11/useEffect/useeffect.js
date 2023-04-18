import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

function MyComponent(){
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    alert('Componente Criado');    
  },[]);

  useEffect(() => {
    alert('Component Atualizado');    
  },[count]);

  return (
    <View style={styles.container}>
      <Text>Count: {count}</Text>
      <Button title="Incremento" onPress={() => setCount(count + 1)} />     
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

});

export default MyComponent;