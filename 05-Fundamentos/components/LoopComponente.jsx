import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function LoopComponente() {

  const lista = ["Uva", "Banana", "Maçã", "Pera", "Melancia", "Abacaxi", "Morango", "Laranja", "Limão", "Manga"]



  return (
    <View>
      <Text>LoopComponente</Text>
      {
        lista.map(fruta => {
          return <Text>{fruta}</Text>
        })
      }
      {lista.map(fruta => <Text>{fruta}</Text>)}
    </View>
  )
}

const styles = StyleSheet.create({})