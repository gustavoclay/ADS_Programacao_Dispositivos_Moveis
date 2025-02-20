// Imports
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, View, ScrollView } from 'react-native';

// Componente principal
// Ele deve retornar o que será renderizado na tela (Template feito com JSX)
export default function App() {

  // código javascript
  const nome = 'Lucas';

  function alerta() {
    alert('Você clicou no botão')
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <StatusBar style="auto" />

        <Text style={{ fontSize: 50 }}>Olá {nome},</Text>
        <Text style={styles.textoGrande}>Seja bem-vindo</Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/736x/f2/4d/e2/f24de241301e2b6ea64bc2ba0eabb6ad.jpg' }}
          style={{
            width: 200,
            height: 200
          }}
        />

        <Image
          source={require('./imagens/logo.png')}
          style={{
            width: 300,
            height: 300,
          }}
          resizeMode='contain'
        />

        <Image
          source={require('./imagens/logo.png')}
          style={{
            width: 300,
            height: 300,
          }}
          resizeMode='contain'
        />

        <Button title="Clique aqui" onPress={alerta} />

        <Button title="Clique aqui" onPress={() => alert('Você clicou no botão')} />

        {/* Comentário dentro do template JSX */}

        {/* Código Javascript dentro do template JSX */}
        <Text>{2 + 2}</Text>

      </View>
    </ScrollView>
  );
}

// Criando estilos
const styles = StyleSheet.create({
  container: {
    paddingTop: 20, // Afastar da statusBar
    flex: 1, // Ocupar toda a tela
    // backgroundColor: '#fff', // Mudar a cor do fundo
    backgroundColor: '#fff',
    alignItems: 'center', // Alinhamento horizontal
    justifyContent: 'center', // Alinhamento vertical
  },
  textoGrande: {
    fontSize: 50,
  }
});
