import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext, useEffect} from 'react';
import {View,Text,Dimensions} from 'react-native';
import {Button} from "react-native-elements"
import Tabs from "../components/Tabs"
import Menu from "../components/Menu"
import styles from "../components/Container"
import Context from "../context/Context"
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'



export default function Stats(props) {
const navigation = props.navigation
const value = useContext(Context)
const incomeCategories = value.incomeCategories
const expenseCategories = value.expenseCategories
const trans = value.trans
const setTrans = value.setTrans
const [categories,setCategories]=useState(incomeCategories)
const inc_len = value.inccatLength
const exp_len = value.expcatLength


const line = {
      labels: incomeCategories,
      datasets: [
        {
          data: inc_len,
          strokeWidth: 2, // optional
        },
      ],
    };
    const line2 = {
          labels: expenseCategories,
          datasets: [
            {
              data: exp_len,
              strokeWidth: 2, // optional
            },
          ],
        };
  return (
    <View style={styles.containerBlue}>
      <View>

          <Menu></Menu>
      </View>

      <View style={{flexDirection: "row", justifyContent: "center"}}>
        <Text style={{alignText: "center", color: "white", fontSize: 30}}>Statistics</Text>
      </View>

      <View>
  <Text>
    Income stats:
  </Text>
  <LineChart
    data={line}
    width={Dimensions.get('window').width}
    height={220}
    yAxisLabel={'$'}
    chartConfig={{
      backgroundColor: '#009933',
      backgroundGradientFrom: '#006622',
      backgroundGradientTo: '#00cc44',
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
</View>


<View>
<Text>
Expense stats:
</Text>
<LineChart
data={line2}
width={Dimensions.get('window').width}
height={220}
yAxisLabel={'$'}
chartConfig={{
backgroundColor: '#009933',
backgroundGradientFrom: '#800000',
backgroundGradientTo: '#ff6666',
decimalPlaces: 2, // optional, defaults to 2dp
color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
style: {
  borderRadius: 16
}
}}
bezier
style={{
marginVertical: 8,
borderRadius: 16
}}
/>
</View>



      <View>
      <Tabs navigation={navigation}></Tabs>
      </View>
    </View>
  );
}
