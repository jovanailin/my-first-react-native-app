import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Context from "../context/Context"
import styles from "./Container"
import Transaction from "./Transaction"

function WeeklyItem({week}){
  const firstday = week[0]
  const lastday = week[1]
  const value = useContext(Context)
  const total = value.total
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
  const weeklyString = firstday.getDate() + " " + months[firstday.getMonth()] + "  ~ " + lastday.getDate() + " " + months[lastday.getMonth()]
return(
  <View style={styles.dailyitem}>

    <Text style={{borderBottomWidth:0.5, borderColor: "gray", paddingHorizontal:20, paddingTop: 20, fontSize: 18}}>
      {weeklyString}
    </Text>
    {
      total.map((t)=>{
      if(t.date>=firstday && t.date<=lastday) return(<Transaction transaction={t}/>)
      })
    }

  </View>
)
}

export default WeeklyItem
