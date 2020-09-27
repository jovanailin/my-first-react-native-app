import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Context from "../context/Context"
import styles from "./Container"

function TotalItem(){
const value = useContext(Context)
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
const income = value.incomeAmount
const expense = value.expenseAmount
const total = value.total
const first = total.length>0 ? total[0].date : new Date()
const last = total.length>0 ? total[total.length-1].date : new Date()
const string1 = String(first.getDate())
const string2 = String(last.getDate())
const month1 = months[first.getMonth()]
const month2 = months[last.getMonth()]
const year1 = String(first.getFullYear())
const year2 = String(last.getFullYear())
const dateString = "From " + string1 + " " + month1 + " " + year1 + " to " + string2 + " " + month2 + " " + year2

return(
  <View style={styles.dailyitem}>
      <Text style={{borderBottomWidth:0.5, borderColor: "gray", paddingHorizontal:20, paddingTop: 20, fontSize: 18}}> {dateString} </Text>
        <View style={{flexDirection:"row",justifyContent:"space-between", padding: 10, borderBottomWidth:0.2, borderColor: "gray"}}>
          <Text style={{color: "green",textAlign: "center"}}>+ {income} $</Text>
          <Text style={{color: "red",textAlign: "center"}}>- {expense} $</Text>
          <Text  style={{color: "blue",textAlign: "center"}}>Balance: {income-expense} $</Text>
        </View>
  </View>
)
}

export default TotalItem
