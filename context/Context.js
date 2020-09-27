import React, {useState, useEffect, useContext} from 'react';
import {AsyncStorage} from "react-native"

const Context = React.createContext()

export const Provider = ({children}) => {
  const [clicked,setClicked]=useState([true,false,false,false])
  const [clicked2,setClicked2]=useState([true,false,false])
  const [trans,setTrans]=useState([false,true])

  const [incomeAmount,setIncomeAmount]=useState(0)
  const [expenseAmount,setExpenseAmount]=useState(0)

  const [income,setIncome]=useState([])
  const [expense,setExpense]=useState([])
  const [total,setTotal]=useState([])
  const [dates,setDates]=useState([])
  const [weeks,setWeeks]=useState([])
  const [months,setMonths]=useState([])

  const loadData = async () => {
  try {
    let i = await AsyncStorage.getItem("income")
    let e = await AsyncStorage.getItem("expense")
    let t = await AsyncStorage.getItem("total")
    let ia = await AsyncStorage.getItem("incomeAmount")
    let ea = await AsyncStorage.getItem("expenseAmount")
    let d = await AsyncStorage.getItem("dates")
    let w = await AsyncStorage.getItem("weeks")
    let m = await AsyncStorage.getItem("months")
    let ic = await AsyncStorage.getItem("incomeCategories")
    let ec = await AsyncStorage.getItem("expenseCategories")
    let il = await AsyncStorage.getItem("inccatLength")
    let el = await AsyncStorage.getItem("expcatLength")
    if(i !== null) {
      i = JSON.parse(i)
      i.map((item)=>{
        item.date = new Date(item.date)
      })
      setIncome(i)
    }
    if(e !==null) {
      e = JSON.parse(e)
      e.map((item)=>{
        item.date = new Date(item.date)
      })
      setExpense(e)
    }
    if(t !== null) {
      t = JSON.parse(t)
      t.map((item)=>{
        item.date = new Date(item.date)
      })
      setTotal(t)
    }
    if(ia !== null) {
      ia = JSON.parse(ia)
      setIncomeAmount(ia)
    }
    if(ea !== null) {
      ea = JSON.parse(ea)
      setExpenseAmount(ea)
    }
    if(ic !== null) {
       ic = JSON.parse(ic)
      setIncomeCategories(ic)
    }
    if(ec !== null) {
      ec = JSON.parse(ec)
      setExpenseCategories(ec)
    }
    if(d !== null) {
      d = JSON.parse(d)
      d.map((item)=>{
        item.date = new Date(item.date)
      })
      setDates(d)
    }
    if(w !== null) {
      w = JSON.parse(w)
      w.map((item)=>{
        item.date[0] = new Date(item.date[0])
        item.date[1] = new Date(item.date[1])
      })
      setWeeks(w)
    }
    if(m !== null) {
      m = JSON.parse(m)
      m.map((item)=>{
        item.date = new Date(item.date)
      })
      setMonths(m)
    }
    if(il !==null) {
      il = JSON.parse(il)
      setInccatLength(il)
    }
    if(el !==null) {
      el = JSON.parse(el)
      setExpcatLength(el)
    }
  }
  catch(e) {
    alert(e)
  }
  }

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("income",JSON.stringify(income))
      await AsyncStorage.setItem("expense",JSON.stringify(expense))
      await AsyncStorage.setItem("total",JSON.stringify(total))
      await AsyncStorage.setItem("incomeAmount",JSON.stringify(incomeAmount))
      await AsyncStorage.setItem("expenseAmount",JSON.stringify(expenseAmount))
      await AsyncStorage.setItem("dates",JSON.stringify(dates))
      await AsyncStorage.setItem("weeks",JSON.stringify(weeks))
      await AsyncStorage.setItem("months",JSON.stringify(months))
      await AsyncStorage.setItem("expenseCategories",JSON.stringify(expenseCategories))
      await AsyncStorage.setItem("incomeCategories",JSON.stringify(incomeCategories))
      await AsyncStorage.setItem("inccatLength",JSON.stringify(inccatLength))
      await AsyncStorage.setItem("expcatLength",JSON.stringify(expcatLength))

      alert("success!")
    }
    catch(e) {
      alert("error!")
    }
  }

  const clearAll = async () => {
    try {
      AsyncStorage.clear()
    }
    catch (error){

    }
  }

  useEffect(()=>{
    loadData()
  },[])

  const sortDate = () => {
    total.sort((a, b)=> {
    let dateA = a.date;
    let dateB = b.date;
    return dateA - dateB;
  });
  dates.sort((a, b)=> {
  let dateA = a.date;
  let dateB = b.date;
  return dateA - dateB;
});
weeks.sort((a, b)=> {
let dateA = a.date;
let dateB = b.date;
return dateA - dateB;
});
months.sort((a, b)=> {
let dateA = a.date;
let dateB = b.date;
return dateA - dateB;
});
  }

  useEffect(()=>{
    sortDate()
  })

  const [incomeCategories,setIncomeCategories]=useState(["Allowance", "Sallary","Petty cach","Bonus", "Other"])
  const [expenseCategories,setExpenseCategories]=useState(["Food","Social","Transport","Household", "Health", "Education", "Gift", "Other"])

  const [inccatLength,setInccatLength] = useState(new Array(incomeCategories.length).fill(0))
  const [expcatLength,setExpcatLength] = useState(new Array(expenseCategories.length).fill(0))


  const click = (n,m) => {
    let niz = []
    if(m==0) niz = [...clicked]
    else niz = [...clicked2]
    niz[n]=true
    for(let i=0; i<niz.length; i++){
      if(i!=n) niz[i]=false;
    }
    if(m==0) setClicked(niz)
    else setClicked2(niz)
  }


  return <Context.Provider value={
      {
        clicked: clicked,
        click: click,
        clicked2: clicked2,
        expenseCategories: expenseCategories,
        setExpenseCategories: setExpenseCategories,
        incomeCategories: incomeCategories,
        setIncomeCategories: setIncomeCategories,
        trans: trans,
        setTrans: setTrans,
        expense: expense,
        setExpense: setExpense,
        income: income,
        setIncome: setIncome,
        total: total,
        setTotal: setTotal,
        dates: dates,
        setDates: setDates,
        sortDate: sortDate,
        weeks: weeks,
        setWeeks: setWeeks,
        months: months,
        setMonths: setMonths,
        incomeAmount: incomeAmount,
        setIncomeAmount: setIncomeAmount,
        expenseAmount: expenseAmount,
        setExpenseAmount: setExpenseAmount,
        inccatLength: inccatLength,
        expcatLength: expcatLength,
        setInccatLength: setInccatLength,
        setExpcatLength: setExpcatLength,
        saveData: saveData
      }
    }>{children}</Context.Provider>
}

export default Context;
