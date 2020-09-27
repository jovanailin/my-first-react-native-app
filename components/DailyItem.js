import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Context from "../context/Context"
import Transaction from "./Transaction"
import styles from "./Container"
function DailyItem({date,dateStamp}){
const value = useContext(Context)
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
const total = value.total

const dateString = String(date.getDate()) + " " + months[date.getMonth()]
const sortDate = value.sortDate


return(
  <View style={styles.dailyitem}>

    <Text style={{borderBottomWidth:0.5, borderColor: "gray", paddingHorizontal:20, paddingTop: 20, fontSize: 18}}> {dateString} </Text>
    {
      total.map((t)=>{
        let s = t.day+t.month+t.year
        if(s===dateStamp)
        return(<Transaction transaction={t}></Transaction>)
      })
    }

  </View>
)
}

export default DailyItem
