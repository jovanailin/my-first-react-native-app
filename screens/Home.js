import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, ScrollView} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import Tabs from "../components/Tabs"
import Menu from "../components/Menu"
import styles from "../components/Container"
import Header from "../components/Header"
import Status from "../components/Status"
import Context from "../context/Context"
import AddTrans from "../components/AddTrans"
import { Modalize } from 'react-native-modalize';
import TransactionList from "../components/TransactionList"
export default function Home(props) {

const navigation = props.navigation
const value = useContext(Context)
const expense = value.expense
const income = value.income
const total = value.total
const dates = value.dates
const [modalVisible,setModalVisible]=useState(false)
const arrowBack = () => {
return(<Icon name="arrow-back" type="material" color="white"></Icon>)
}
const getData = () => {
  if(total.length==0) return <Text>No data available.</Text>
  else return(<View></View>)
}

const test = () => {
    if(dates.length==0) return <Text>No data available.</Text>
    else {
      return(
        <View>
          {
            dates.map((d)=>{
              return(
                <View>
                  <Text>{d.name}</Text>
                </View>
              )
            })
          }
        </View>
      )
    }
}

  return (
    <View style={styles.container}>

      <View>
        <Menu></Menu>
        <Header></Header>
        <Status></Status>
      </View>



          <ScrollView contentContainerStyle={styles.container}>

          <View>
            <TransactionList></TransactionList>
          </View>

        <View style={styles.row}>
            <Modal
              propagateSwipe
              animationType="slide"
              visible={modalVisible}
              onRequestClose={()=>setModalVisible(false)}
              style={{ backgroundColor: "#F1F1F1"}}>

             <ScrollView>
               <Button icon={arrowBack()} buttonStyle={{ justifyContent: 'flex-start' }} titleStyle={{ textAlign: "center" }} title=" go back" onPress={()=>setModalVisible(false)}></Button>
               <AddTrans setModalVisible={setModalVisible}></AddTrans>
             </ScrollView>
            </Modal>
            <View style={{flexDirection: "row",justifyContent: "flex-end", flex:1}}>
                <TouchableOpacity onPress={()=>{setModalVisible(true)}} style={styles.roundButton}><Text style={styles.text}>+</Text></TouchableOpacity>
            </View>
        </View>
      </ScrollView>





      <View>
      <Tabs navigation={navigation}></Tabs>
      </View>

    </View>
  );
}
