import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Context from "../context/Context"

export default function Status(){
  const value = useContext(Context)
  const [income,setIncome] = useState(0.0)
  const [expense,setExpense] = useState(0.0)
  const [total,setTotal] = useState(0.0)
  const setIncomeAmount = value.setIncomeAmount
  const setExpenseAmount = value.setExpenseAmount

  const loadStatus = () => {
    let i=0.0
    let e=0.0
    let t=0.0
    value.income.map((item)=>{
      i=i+parseFloat(item.amount)
    })
    value.expense.map((item)=>{
      e=e+parseFloat(item.amount)
    })
    t=i-e

    setIncome(i)
    setExpense(e)
    setTotal(t)
    setIncomeAmount(i)
    setExpenseAmount(e)
  }

  useEffect(()=>{
    loadStatus()
  })


  return(
    <View style={styles.menu}>
      <View >
        <Text style={styles.text}>Income</Text>
        <Text style={styles.green}>{income} $</Text>
      </View>
      <View>
        <Text style={styles.text}>Expenses</Text>
        <Text style={styles.red}>{expense} $</Text>
      </View>
      <View>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.blue}>{total} $</Text>
      </View>
  </View>)
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: 'space-around',
    backgroundColor: "white",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    textAlign: "center"
  },
  green: {
    color: "green",
    textAlign: "center"
  },
  red: {
    color: "red",
    textAlign: "center"
  },
  blue: {
    color: "blue",
    textAlign: "center"
  }
});
