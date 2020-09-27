import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Icon, Button} from "react-native-elements"
import Context from "../context/Context"

export default function Header(){
const value = useContext(Context)
const clicked = value.clicked
const click = value.click

  const getStyle = (n) => {
    if(clicked[n]) return styles.textClicked
    else return styles.textNotClicked
  }


  return(
  <View style={styles.menu} elevation={5}>
    <Button buttonStyle={styles.button} title="Daily" titleStyle={getStyle(0)} onPress={()=>click(0,0)}></Button>
    <Button buttonStyle={styles.button} title="Weekly" titleStyle={getStyle(1)} onPress={()=>click(1,0)}></Button>
    <Button buttonStyle={styles.button} title="Monthly" titleStyle={getStyle(2)} onPress={()=>click(2,0)}></Button>
    <Button buttonStyle={styles.button} title="Total" titleStyle={getStyle(3)} onPress={()=>click(3,0)}></Button>
  </View>)}


const styles = StyleSheet.create({
  menu: {
    backgroundColor: "#0693E3",
    padding: 5,
    color: "white",
    flexDirection: "row",
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    backgroundColor: "transparent",
  },
  textClicked: {
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 3,
    paddingHorizontal: 10
  },
  textNotClicked: {
    color: "black"
  }
});
