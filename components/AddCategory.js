import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView, TextInput} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Context from "../context/Context"

export default function AddCategory({setOpenModal, trans}) {
const value = useContext(Context)
const categories = trans[0] ? value.incomeCategories : value.expenseCategories
const setCategory = trans[0] ? value.setIncomeCategories : value.setExpenseCategories
const [text,setText] = useState("")
const len = trans[0] ? value.inccatLength : value.expcatLength
const setlen = trans[0] ? value.setInccatLength : value.setExpcatLength

const arrowBack = () => {
return(<Icon name="arrow-back" type="material" color="white"></Icon>)
}

const addCategory = () => {
  let c = [...categories]
  c.push(text)

  let l = [...len]
  l.push(0)
  setlen(l)

  setCategory(c)
  setOpenModal(false)
}
return(
  <View style={{flex:1, justifyContent: "space-between"}}>
     <Button icon={arrowBack()} buttonStyle={{ justifyContent: 'flex-start' }} titleStyle={{ textAlign: "center" }} title=" go back" onPress={()=>setOpenModal(false)}></Button>
       <View style={{flex:1, justifyContent: "center"}}>

           <TextInput style={{borderWidth: 0.5,borderColor:"gray",padding:20, marginVertical:20}} onChangeText={t => setText(t)} keyboardType="default" value={text} placeholder="New category..."></TextInput>
           <Button bottonStyle={{margin:20}} title='save' onPress={addCategory}></Button>
       </View>
  </View>

)

}
