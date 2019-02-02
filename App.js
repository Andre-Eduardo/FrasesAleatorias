/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert,TouchableOpacity,Button} from 'react-native';

var frases = ["Qualquer tecnologia suficientemente avançada é equivalente à mágica",
 "Computadores são inúteis. Eles conseguem apenas lhe dar respostas",
  "Isso que é vida",
"O amor não se vê com os olhos mas com o coração.",
"A medida do amor é amar sem medida.",
"O nome dela é Jeniffer",
"Tenho em mim todos os sonhos do mundo.",
"O mundo precisa de amor",
"Mude o mundo",
"Hoje é um lindo dia para salvar vidas"];


type Props = {};
export default class App extends Component<Props> {
    constructor(props){
        super(props);
        this.state ={texto: 'Olá mary'}
    }

    alteraTexto(){
        var numeroAleatorio = Math.floor(Math.random() *10);

        this.setState({texto:' '+frases[numeroAleatorio]})
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Frases Aleatórias</Text>

        <Text style={styles.welcome}>{this.state.texto}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress= {()=> {this.alteraTexto()}}
            >
               <Text style={styles.textoBotao}> Clique aqui </Text>
            </TouchableOpacity>

        <Text style={styles.footer} >Develop by André Oliveira</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  welcome: {

    fontSize: 24,
    textAlign: 'center',
    color: '#0F1A20',
    backgroundColor: '#FFFFFF',
    textAlignVertical: 'center',
    paddingVertical: 30,
    paddingHorizontal: 60,
    marginTop: 80,
    fontWeight: 'bold'

  },
  footer: {

    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    backgroundColor: '#ED254E',

},
title: {

  fontSize: 28,
  textAlign: 'center',
  textAlignVertical: 'center',
  color: '#FFFFFF',
  backgroundColor: '#ED254E',
  fontWeight: 'bold',
  paddingVertical: 10,

},
button:{
    marginTop: -70,
    backgroundColor: '#0F1A20',
    paddingVertical: 20,
    marginHorizontal:60,
    textAlignVertical: 'center',
    alignItems: 'center',
    borderRadius: 10,

},
textoBotao:{
    fontSize:16,
    color: '#FFFFFF',
    fontWeight: 'bold',
}


});
