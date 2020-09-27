import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback} from 'react-native';
import {Icon, Button, Overlay} from "react-native-elements"
import styles from "./Container"
import DateTimePicker from '@react-native-community/datetimepicker';
import Context from "../context/Context"
import AddCategory from "./AddCategory"

export default function AddTrans(props) {
  const setModalVisible = props.setModalVisible
  const value = useContext(Context)
  const trans = value.trans
  const setTrans = value.setTrans
  const inc_cat = value.incomeCategories
  const exp_cat = value.expenseCategories;
  const inc_len = value.inccatLength
  const exp_len = value.expcatLength
  const set_inc_len = value.setInccatLength
  const set_exp_len = value.setExpcatLength
  const screenHeight = Dimensions.get('window').height
  const [openModal,setOpenModal]=useState(false)

  const addCategory = () => {
    setOpenModal(true)
  }

  const sortDate = value.sortDate
  useEffect(()=>{
    sortDate()
  })

  const dates = value.dates
  const setDates = value.setDates
  const weeks = value.weeks
  const setWeeks = value.setWeeks
  const months2 = value.months
  const setMonths = value.setMonths

  const income = value.income
  const setIncome = value.setIncome
  const expense = value.expense
  const setExpense = value.setExpense
  const total = value.total
  const setTotal = value.setTotal

  const [category,setCategory] = useState("choose category from below")
  const [finished,setFinished] = useState(false)
  const [status,setStatus]= useState([false,false,false])
  const [note,setNote]=useState("")
  const [obj,setObj]=useState({
    date:{},
    formatedDate: "",
    amount: "",
    category: "",
    cc: "",
    note: "",
    day:"",
    month:"",
    year:"",
    type: ""
  })
  const [dateObj,setDateObj]=useState({
    name: "",
    date: {}
  })

  const [weekObj,setWeekObj]=useState({
    name: "",
    date: []
  })

  const [monthObj,setMonthObj]=useState(
    {
      name:"",
      date: {}
    }
  )

  const selectCat = (cat) => {
    setCategory(cat)
    let s = [...status]
    s[1]=true
    setStatus(s)
  }

  const getCat = () => {
    if(trans[0]==true) return inc_cat
    else return exp_cat
  }

  const submitBtnStyle = () => {
    if(finished) return styles.submit
    else return styles.nosubmit
  }

  const [click,setClick]=useState([false,false])

  const choseStyle2 = (n) => {
    if(n==0 && click[n]==true) return styles.cashcardClicked
    if(n==0 && click[n]==false) return styles.cashcardNotClicked
    if(n==1 && click[n]==true) return styles.cashcardClicked
    if(n==1 && click[n]==false) return styles.cashcardNotClicked
  }

  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"]
  const [date,putDate]=useState(new Date())
  const [show, setShow] = useState(false);
  const [formated,setFormated]=useState("choose date")
  const [amount,setAmount]=useState("")

  const onChange = (event, selectedDate) => {
  const currentDate = selectedDate;
  putDate(currentDate);
  setShow(false)
};

  const checkStatus = () => {
    if(status[0]==true && status[1]==true && status[2]==true) setFinished(true)
    if(finished){
      obj.date=new Date(date.getTime())
      obj.formatedDate=formated;
      obj.amount=amount;
      obj.category=category;
      obj.cc = click[0] ? "cash" : "card";
      obj.note = note;
      obj.day = String(date.getDate());
      obj.month = months[date.getMonth()];
      obj.year = String(date.getFullYear());
      obj.type = trans[0] ? "income" : "expense"
      dateObj.name = obj.day+obj.month+obj.year
      dateObj.date=new Date(date.getTime())

      let curr1 = new Date(date.getTime())
      let curr2 = new Date(date.getTime())
      let first = curr1.getDate() - curr1.getDay();
      let last = first + 6;
      let firstday = new Date(curr1.setDate(first))
      let lastday = new Date(curr2.setDate(last))
      weekObj.name = String(firstday.getDate())+String(lastday.getDate())+obj.month
      weekObj.date.push(firstday)
      weekObj.date.push(lastday)

      monthObj.name=obj.month+obj.year
      monthObj.date = new Date(date.getTime())
    }
  }

  const addTransaction = () => {
    let currentDates = [...dates]
    let name = dateObj.name
    if(!currentDates.find(d=>d.name===name)) currentDates.push(dateObj)
    setDates(currentDates)

    let currentWeeks = [...weeks]
    let name2 = weekObj.name
    if(!currentWeeks.find(w=>w.name===name2)) currentWeeks.push(weekObj)
    setWeeks(currentWeeks)

    let currentMonths = [...months2]
    let name3 = monthObj.name
    if(!currentMonths.find(m=>m.name===name3)) currentMonths.push(monthObj)
    setMonths(currentMonths)

    let transac = trans[0] ? "income" : "expense"
    let inc = [...income]
    let exp = [...expense]
    let tot = [...total]

    let label = category
    let incarr = [...inc_len]
    let exparr = [...exp_len]

    if(transac==="income") {
      inc.push(obj)
      tot.push(obj)
      setIncome(inc)
      setTotal(tot)
      incarr[inc_cat.indexOf(label)]= incarr[inc_cat.indexOf(label)]+parseFloat(amount)
      set_inc_len(incarr)


    }
    if(transac==="expense"){
      exp.push(obj)
      tot.push(obj)
      setExpense(exp)
      setTotal(tot)
      exparr[exp_cat.indexOf(label)]= exparr[exp_cat.indexOf(label)]+parseFloat(amount)
      set_exp_len(exparr)

    }

    alert("added transaction!")

    setModalVisible(false)
  }

useEffect(()=>{
  setShow(false)
  setFormated(String(date.getDate()+"/"+months[date.getMonth()]+"/"+String(date.getFullYear())))
  checkStatus()
})

const cashOption = () => {
  setClick([true,false])
  let s = [...status]
  s[2]=true
  setStatus(s)
}
const cardOption = () => {
  setClick([false,true])
  let s = [...status]
  s[2]=true
  setStatus(s)
}


  const choseStyle = (n) => {
    if(n==0 && trans[n]==true) return styles.incomeClicked
    if(n==0 && trans[n]==false) return styles.incomeNotClicked
    if(n==1 && trans[n]==true) return styles.expensesClicked
    if(n==1 && trans[n]==false) return styles.expensesNotClicked
  }

const addNote = (e) => {
  let n = e.target.value
  setNote(n)
}

  return(
    <View>
      <View style={styles.row2} >
      <TouchableOpacity onPress={()=>{setTrans([true,false])}}><Text style={choseStyle(0)}>Income</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{setTrans([false,true])}}><Text style={choseStyle(1)}>Expense</Text></TouchableOpacity>

      </View>

      <View>
        <View style={styles.row3}><Text style={styles.modal}>Date</Text>
        <Text style={styles.modal2} onPress={()=>{setShow(true)}}>{formated}</Text>
          {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
        <View style={styles.row3}><Text style={styles.modal}>Amount</Text>
        <View style={styles.modal2}><Text>$</Text><TextInput onChange={()=>{
          let s = [...status]
          s[0]=true
          setStatus(s)
        }} onChangeText={text => setAmount(text)} keyboardType="decimal-pad" value={amount} placeholder=" add amount"></TextInput></View>
        </View>
        <View style={styles.row3}><Text style={styles.modal}>Category</Text>
            <TextInput style={styles.modal2} value={category}></TextInput>
        </View>
        <View style={styles.row3}><Text style={styles.modal}>Account</Text>
          <View style={styles.modal2}>
            <TouchableOpacity onPress={()=>{cashOption()}}><Text style={choseStyle2(0)}>Cash</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{cardOption()}}><Text style={choseStyle2(1)}>Card</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.row3}><Text style={styles.modal}>Note</Text>
          <TextInput onChangeText={text => setNote(text)} style={styles.modal2} value={note} placeholder="add a note about your input"></TextInput>
        </View>
        <View style={styles.row3}>
          <TouchableOpacity onPress={addTransaction} disabled={!finished} style={submitBtnStyle()}><Text style={{textAlign: "center", color: "white"}}>Submit transaction</Text></TouchableOpacity>
        </View>
      </View>

      <View>
        <ScrollView scrollEnabled={true}>
        <TouchableOpacity>
          {getCat().map((cat)=>{
            return(<Button key={getCat().indexOf(cat)} onPress={()=>{selectCat(cat)}} title={cat}></Button>)
          })}
          <Button onPress={addCategory} title="+"></Button>
          <Modal
            visible={openModal}
            onRequestClose={()=>setOpenModal(false)}
            style={{ backgroundColor: "#F1F1F1"}}>

            <AddCategory setOpenModal={setOpenModal} trans={trans}></AddCategory>
          </Modal>
        </TouchableOpacity>

        </ScrollView>
      </View>

    </View>
  )
}
