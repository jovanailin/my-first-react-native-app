import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Context from "../context/Context"

function Transaction({transaction}){
const getColor = () => {
  if(transaction.type=="income") return "green"
  else return "red"
}

const getSign = () => {
  if(transaction.type=="income") return "+"
  else return "-"
}

  return(
    <View style={{flexDirection:"row",justifyContent:"space-between", padding: 10, borderBottomWidth:0.2, borderColor: "gray"}}>
      <Text style={{textAlign:"center"}}>{transaction.category}</Text>
      <Text style={{textAlign:"center"}}>{transaction.cc}</Text>
      <Text style={{textAlign:"center"}}>{transaction.type}</Text>
      <Text style={{textAlign:"center",color:getColor()}}>{getSign()}{transaction.amount} $</Text>

    </View>
  )
}

export default Transaction
