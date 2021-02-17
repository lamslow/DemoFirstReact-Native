/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import HistoryScreen from './screen/HistoryScreen';
import DiscountScreen from './screen/DiscountScreen';
import ProfileScreen from './screen/ProfileScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabComponent= ()=>{
  return(
    
    <Tab.Navigator
    barStyle={{ backgroundColor: 'white' }}
    
  // activeColor="#f0edf6"
  // inactiveColor="#3e2465"
  >

    <Tab.Screen name="Home1" component={HomeScreen} options={{
      title: "Trang chủ",
      tabBarLabel: "Trang chủ",
      tabBarColor: '#CDB79E',

      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="home" color={"#6A5ACD"} size={26} />
      ),
    }}
    />
    <Tab.Screen name="History" component={HistoryScreen} options={{
      
      tabBarLabel: 'Lịch sử',
      tabBarColor: '#B9D3EE',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="history" color={"#6A5ACD"} size={26} />
      ),
    }} />
    <Tab.Screen name="Discount" component={DiscountScreen} options={{
      tabBarLabel: 'Mã khuyến mại',
      tabBarColor: '#CCCCCC',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="sale" color={"#6A5ACD"} size={26} />
      ),
    }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{
      tabBarLabel: 'Cá nhân ',
      tabBarColor: '#C1CDC1',
      tabBarIcon: ({ color }) => (
        <MaterialCommunityIcons name="account-circle" color={"#6A5ACD"} size={26} />
      ),
    }} />
  </Tab.Navigator>
  )
}
const App = () => {
  return (
    <>
      <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Login"  >
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false }} />

          <Stack.Screen name="Register" component={RegisterScreen} options={{headerLeft:null, headerShown:false}}  />

          <Stack.Screen name="Home" component={tabComponent} options={{headerLeft:null,headerShown:false}} />

          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Discount" component={DiscountScreen} />
        </Stack.Navigator>

      </NavigationContainer>

    
    </>
  );
};



const styles = StyleSheet.create({

});

export default App;
