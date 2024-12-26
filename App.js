import React from 'react';

import { View, StyleSheet, Image } from 'react-native';
import CustomButton from './components/CustomButton';


const App = () => {

  return (
    <View style={styles.container}>
     <CustomButton 
            title="Clique Aqui" 
            onPress={() => alert('Botão Pressionado!')} 
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:100,
    justifyContent: 'flex-start', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
    backgroundColor: '#f0f0f0', // Cor de fundo clara para destaque
  },
});

export default App;