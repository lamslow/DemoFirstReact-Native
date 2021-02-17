/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState,useEffect } from 'react';
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
import { LoginManager, AccessToken, LoginButton, GraphRequest, GraphRequestManager, } from 'react-native-fbsdk';
import Dialog, {DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation, } from 'react-native-popup-dialog';







const LoginScreen = ({ navigation }) => {

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    } else {
      navigation.navigate('Home',{screen:"History", params:username})


    }





    // Once signed in, get the users AccesToken
    // const data = await AccessToken.getCurrentAccessToken();

    // if (!data) {
    //   throw 'Something went wrong obtaining access token';
    // }

    // // Create a Firebase credential with the AccessToken
    // const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

    // // Sign-in the user with the credential
    // return auth().signInWithCredential(facebookCredential);

  }

  async function onFacebookLogout() {
    await LoginManager.logOut();
  }


  const [username, setUsername] = useState('');
  const [imageprofile, setImageprofile] = useState('');
  const getInfor = () => {
    AccessToken.getCurrentAccessToken().then(
      (data) => {
        let accessToken = data.accessToken
        const responseInfoCallback = (error, result) => {
          if (error) {
            console.log(error)
            alert('Error fetching data: ' + error.toString());
          } else {
            setUsername(result["name"])
            setImageprofile(result["picture"]["data"]["url"])
            console.log(result["picture"]["data"]["url"])
           
          }
        }

        const infoRequest = new GraphRequest(
          '/me',
          {
            accessToken: accessToken,
            parameters: {
              fields: {
                string: 'email,name,first_name,middle_name,last_name, picture'
              }
            }
          },
          responseInfoCallback
        );

        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start()
      }
    )
  }
  useEffect(() => {
    getInfor()
    console.log("AAAAA")
  },[]
  );
 
  return (
    <>
      <View style={styles.contaner}>
        <TextInput style={{ borderRadius: 10, borderWidth: 1, borderColor: 'black' }} placeholder="Mời bạn nhập username" />

        <TextInput secureTextEntry={true} style={{ borderRadius: 10, borderWidth: 1, borderColor: 'red' }} placeholder="Mời bạn nhập username" />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
        > 
        <Text style={{paddingTop:10}}>
          Login with Facebook
        </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => onFacebookLogout().then(() => {
            console.log('Log out with Facebook!')
            setUsername('')
          })}
        >
       <Text style={{paddingTop:10}}>
            Logout with Facebook
            </Text>
        </TouchableOpacity>
      </View>

      {/* <Text>{username}</Text>
      <Image source={{ uri: imageprofile }}
        style={{ width: 150, height: 150 }} /> */}
        
    </>
  );
};

const styles = StyleSheet.create({
    contaner:{
      flex:1,
      justifyContent:'center',
      flexDirection:'column',
      margin:10,
      
    },
    
    buttonLogin:{
      borderRadius:20,
      alignItems:'center',
      height:50,
      margin:10,
      backgroundColor:"white",
      borderWidth:2
    }


});

export default LoginScreen;
