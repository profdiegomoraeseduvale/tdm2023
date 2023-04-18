import React, {useMemo} from 'react';
import { Text, StyleSheet } from 'react-native';


const calcularQuadrado = (numero) => {    
    return numero * numero;
  }

const Quadrado = ({ numero }) => {
  const resultado = useMemo(() => calcularQuadrado(numero), [numero]);
  return <Text style={styles.texto}>O quadrado de {numero} é {resultado}.</Text>;
}

const styles = StyleSheet.create({
     texto: {
        fontSize: 23
     },
  });

export default Quadrado;