/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Dimensions ,ToastAndroid
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Rating, AirbnbRating } from 'react-native-elements';
import Dialog, {DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation, } from 'react-native-popup-dialog';




const RegisterScreen = ({ navigation }) => {
 
  return (
    <>
        <Text onPress={()=>{
          
         
        }}>
         Đăng kí
        </Text>
        
    </>
  );
};

const styles = StyleSheet.create({
  address: {
    flex: 3,
    flexDirection: 'row',

  },
  container1: {

    margin: 10,
    flexDirection: 'row'
  }
  ,
  container2: {
    marginBottom: 60,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row'
  }
  ,
  images: {
    marginRight: 15
  },

  text: {
    fontFamily:'brownies cake',
    color: 'white'
  },

  



});

export default RegisterScreen;
