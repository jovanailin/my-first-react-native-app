import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Icon, Button} from "react-native-elements"

export default function Menu(){
const date=new Date()
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
const parseDate = () => {
  let fullDate = date.getFullYear() + " " + months[date.getMonth()]
  return fullDate;
}

  return(
    <View style={styles.menu}>
    <Text style={styles.text}>{parseDate()}</Text>
  </View>)
}

const menu = () => {
return(<Icon name="menu" type="reorder" color="white" size={30}></Icon>)
}

const styles = StyleSheet.create({
  menu: {
    marginTop: 20,
    backgroundColor: "#0693E3",
    padding: 5,
    color: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: "transparent"
  },
  text: {
    color: "white",
    padding: 20,
    fontSize: 20
  }
});
