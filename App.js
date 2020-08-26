// cSpell:ignore Fatec, Botao
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

export default function App() {
  //array de frases - fonte: https://www.pensador.com/autor/albert_einstein/
  let frases = [
    "A imaginação é mais importante que o conhecimento.",
    "A liberação da energia atômica mudou tudo, menos nossa maneira de pensar.",
    "O mundo não está ameaçado pelas pessoas más, e sim por aquelas que permitem a maldade.",
    "O nacionalismo é uma doença infantil; é o sarampo da humanidade.",
    "Os ideais que iluminaram o meu caminho são a bondade, a beleza e a verdade.",
    "Nenhum cientista pensa com fórmulas.",
    "Tudo deveria se tornar o mais simples possível, mas não simplificado.",
    "Quero conhecer os pensamentos de Deus... O resto é detalhe.",
    "Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta."
  ]

  function falar() {
    var frase = frases[parseInt(Math.random() * frases.length)]
    Speech.speak(frase, {
      language: 'pt'
    });
  }

  function parar() {
    Speech.stop();
  }


  return (
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name="comment-o" size={50} /> &nbsp;
            Fala Einstein!
        </Text>

      <Image source={require('./assets/einstein.png')} style={styles.Imagem} />

      <FontAwesome.Button
        name="volume-up"
        backgroundColor="#0275d8"
        onPress={falar}
        style={styles.Botao}
      >Ouvir Frase</FontAwesome.Button>

      <FontAwesome.Button
        name="stop-circle"
        backgroundColor="#d9534f"
        onPress={parar}
        style={styles.Botao}
      >Parar</FontAwesome.Button>
      { /*Consulte a lista de ícones em: https://icons.expo.fyi */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Titulo: {
    fontSize: 30,
    color: '#1a237e' /* indigo */
  },
  Botao: {
    height: 50,
    borderRadius: 10,
    marginLeft: 5,
    width: 200
  },
  Imagem: {
    height: 400,
    resizeMode: 'center'
  },
});


