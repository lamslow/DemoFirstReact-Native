/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Button,
  ToastAndroid, Image
} from 'react-native';
import { LoginManager, AccessToken, LoginButton, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';
// import auth from '@react-native-firebase/auth';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const HistoryScreen = ({ navigation,route }) => {
  const {screen,params}=route.params;

  

  
  return (
    <>
    <View>
      <Text>Username: {String(screen) }</Text>
    </View>

  
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default HistoryScreen;
