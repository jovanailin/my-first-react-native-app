import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View} from 'react-native';
import Home from "./screens/Home"
import Navigator from "./routes/homeDrawer"
import {Provider} from "./context/Context"


export default function App() {

  return (
      <Provider><Navigator></Navigator></Provider>
  );
}
