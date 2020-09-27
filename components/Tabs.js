import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import {Icon, Button} from "react-native-elements"
import Context from "../context/Context"
export default function Tabs(props) {
  const value = useContext(Context)
  const clicked = value.clicked2
  const click = value.click

  const trans = () => {
  return(<Icon name="list" type="material" color={getColor(0)} size={25}></Icon>)
  }
  const stats = () => {
  return(<Icon name="assessment" type="material" color={getColor(1)} size={25}></Icon>)
  }
  const settings = () => {
  return(<Icon name="settings" type="material" color={getColor(2)} size={25}></Icon>)
  }



  const getStyle = (n) => {
    if(clicked[n]) return styles.textClicked
    else return styles.textNotClicked
  }
  const getColor = (n) => {
    if(clicked[n]) return "red"
    else return "black"
  }


  const navigation = props.navigation
  const goToStats = () => {

    navigation.navigate("Stats")
  }
  const goToHome = () => {

    navigation.goBack()
  }
  const goToSettings = () => {

    navigation.navigate("Settings")
  }
  return(
    <View style={styles.tabs}>
    <View style={styles.button}>
      <Button titleStyle={getStyle(0)} buttonStyle={styles.btn} onPress={()=>{goToHome(); click(0,1)}} icon={trans}></Button>
      <Text style={getStyle(0)}>Trans.</Text>
    </View>
    <View style={styles.button}>
      <Button titleStyle={getStyle(1)} buttonStyle={styles.btn} icon={stats} onPress={()=>{goToStats(); click(1,1)}}></Button>
      <Text style={getStyle(1)}>Stats</Text>
    </View>
    <View style={styles.button}>
      <Button titleStyle={getStyle(2)} buttonStyle={styles.btn} icon={settings} onPress={()=>{goToSettings(); click(2,1)}}></Button>
      <Text style={getStyle(2)}>Settings</Text>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  tabs: {
    padding: 10,
    flexDirection: "row",
    justifyContent: 'space-around',
    borderTopColor: "#DDD",
    borderTopWidth: 1,
    backgroundColor: "white"
  },
  button: {
    alignItems: "center"
  },
  btn: {
    backgroundColor: "transparent"
  },
  textClicked: {
    color: "red",
  },
  textNotClicked: {
    color: "black"
  }
})
