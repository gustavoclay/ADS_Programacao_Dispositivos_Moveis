import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavascriptComponente() {

  const nome = "Gustavo"
  const idade = 20

  function exibirNome() {
    return nome
  }

  function checkMaiorIdade () {
    if (idade >= 18) {
      return <Text>Maior de idade</Text>
    } else {
      return <Text>Menor de idade</Text>
    }
  }

  return (
    <View>
      <Text>Javascript Componente</Text>
      <Text>Olá {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Nome: {exibirNome()}</Text>
      <Text>Resultado: {1 + 1}</Text>
      <Text>Resultado: {idade + 1}</Text>
      {checkMaiorIdade()}
      {idade >= 18 ? <Text>Maior de idade</Text> : <Text>Menor de idade</Text>}
    </View>
  )
}

const styles = StyleSheet.create({})