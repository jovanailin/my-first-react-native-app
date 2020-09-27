import { StatusBar } from 'expo-status-bar';
import React, {useState, useContext} from 'react';
import {View,Text,AsyncStorage,TouchableOpacity} from 'react-native';
import Tabs from "../components/Tabs"
import Menu from "../components/Menu"
import styles from "../components/Container"
import Context from "../context/Context"

export default function Settings(props) {
const navigation = props.navigation
const value = useContext(Context)
const saveData = value.saveData
  return (
    <View style={styles.container}>
      <View>

          <Menu></Menu>
      </View>
      <View>
        <TouchableOpacity onPress={saveData} style={styles.saveTouchable}><Text style={styles.saveText}>Save to local Storage</Text></TouchableOpacity>
        <TouchableOpacity style={styles.saveTouchable}><Text style={styles.saveText}>Backup data to your Google Account</Text></TouchableOpacity>
      </View>
      <View>
      <Tabs navigation={navigation}></Tabs>
      </View>
    </View>
  );
}
