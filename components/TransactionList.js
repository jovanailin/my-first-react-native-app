import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Transaction from "./Transaction"
import DailyItem from "./DailyItem"
import WeeklyItem from "./WeeklyItem"
import MonthlyItem from "./MonthlyItem"
import TotalItem from "./TotalItem"
import Context from "../context/Context"

function TransactionList(){
const value = useContext(Context)
const clicked = value.clicked
const dates = value.dates
const total = value.total
const weeks = value.weeks

const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
const months2 = value.months

return(
  <View>
    <View>
      {
        dates.map((d)=>{
          if(clicked[0])
          return(<DailyItem date={d.date} dateStamp={d.name}></DailyItem>)
        })
      }
    </View>
    <View>
      {
        weeks.map((w)=>{
          if(clicked[1])
          return(<WeeklyItem week={w.date}></WeeklyItem>)
        })
      }
    </View>
    <View>
      {
        months2.map((m)=>{
          if(clicked[2])
          return(<MonthlyItem month={m.date}></MonthlyItem>)
        })
      }
    </View>
    <View>
      {
        (() => {
          if(clicked[3])
          return(<TotalItem></TotalItem>)
        })()
      }
    </View>
  </View>
)

}

export default TransactionList
