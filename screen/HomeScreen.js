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




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'VINFAST FADIL FULL 2019',
    rating: '5',
    addressRent: 'Hai Bà Trưng, Hà Nội',
    priceRent: '600.000đ / ngày'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'VINFAST FADIL FULL 2019',
    rating: '2',
    addressRent: 'Hai Bà Trưng, Hà Nội',
    priceRent: '600.000đ / ngày'
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'VINFAST FADIL FULL 2019',
    rating: '1',
    addressRent: 'Hai Bà Trưng, Hà Nội',
    priceRent: '600.000đ / ngày'
  },

];

const HomeScreen = ({ navigation }) => {
  const [
    defaultAnimationDialog, setDefaultAnimationDialog
  ] = useState(false);
  const [
    scaleAnimationDialog, setScaleAnimationDialog
  ] = useState(false);
  const [
    slideAnimationDialog, setSlideAnimationDialog
  ] = useState(false);
  return (
    <>
      <ScrollView >
        <View style={{ backgroundColor: '#7A67EE' }}>
          <View style={styles.container1}>
            <View style={styles.address}>
              <Image style={{ width: 20, height: 20 }}
                source={require('/React Native Project/DemoFirst/images/map-marker.png')} />
              <Text style={styles.text}>678 Đường Láng, Đống Đa, Hà Nội</Text>

            </View>
            <MaterialCommunityIcons style={styles.images} name="message-bulleted" size={20} />
            <MaterialCommunityIcons style={styles.images} name="bell-ring" size={20} />
            <MaterialCommunityIcons style={styles.images} name="share-variant" size={20} />
            <View>
            </View>
          </View>




          <View style={styles.container2}>
            <Image style={{ borderRadius: 120 / 2, width: 120, height: 120 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />

            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={styles.text}>Xin chào,</Text>
              <Text style={{ fontSize: 20, color: 'white' }}>Nguyễn Anh Thưởng</Text>
              <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                  <MaterialCommunityIcons name="wallet" size={20} color={'green'} />
                  <Text style={styles.text}>150.000đ</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons name="crown" size={20} color={'yellow'} />
                  <Text style={styles.text}>150 điểm</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: 'white', flexDirection: 'column', marginTop: -50, marginLeft: 15, marginRight: 15, paddingLeft: 30 }}>
          <View style={{ marginBottom: 20 }}>


            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Địa điểm nhận xe</Text>
            <TextInput onFocus={() => {
              navigation.navigate('Discount')
            }} style={styles.text} placeholder="Nhập địa chỉ nhận xe">

            </TextInput>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Thời gian thuê</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 30 }}>
              <TextInput style={{ marginRight: 10 }} placeholder='hh:mm mm/dd/yyyy' />
              <Text style={{ marginRight: 10 }}>đến</Text>
              <TextInput placeholder='hh:mm mm/dd/yyyy' />
            </View>

            <TouchableOpacity onPress={() => 
            setDefaultAnimationDialog(true)

            } style={{ borderRadius: 10, color: 'white', alignSelf: 'center', backgroundColor: 'red', height: 30, width: 200, }}>
              <Text style={{ alignSelf: 'center', paddingTop: 5, color: 'white' }}>Tìm xe ngay</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'row', padding: 20 }}>

          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <Image style={{ borderRadius: 80 / 2, width: 80, height: 80 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />
            <Text>Xe tự lái</Text>
          </View>


          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <Image style={{ borderRadius: 80 / 2, width: 80, height: 80 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />
            <Text>Xe tự lái</Text>
          </View>


          <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
            <Image style={{ borderRadius: 80 / 2, width: 80, height: 80 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />
            <Text>Xe tự lái</Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', padding: 20 }}>

          <View style={{ flexDirection: 'column', flex: 1 / 3, alignItems: 'center' }}>
            <Image style={{ borderRadius: 80 / 2, width: 80, height: 80 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />
            <Text>Xe tự lái</Text>
          </View>


          <View style={{ flexDirection: 'column', flex: 1 / 3, alignItems: 'center' }}>
            <Image style={{ borderRadius: 80 / 2, width: 80, height: 80 }}
              source={require('/React Native Project/DemoFirst/images/man.jpg')} />
            <Text>Xe tự lái</Text>
          </View>
        </View>

        <View style={{ marginLeft: 20, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>ƯU ĐÃI</Text>
          <View>
            <ScrollView horizontal={true}>
              <Image style={{ height: 150, borderRadius: 20, marginRight: 20 }}
                source={require('/React Native Project/DemoFirst/images/poster1.jpg')} />
              <Image style={{ height: 150, borderRadius: 20, marginRight: 20 }}
                source={require('/React Native Project/DemoFirst/images/poster2.jpg')} />
              <Image style={{ height: 150, borderRadius: 20, marginRight: 20 }}
                source={require('/React Native Project/DemoFirst/images/poster3.jpg')} />
              <Image style={{ height: 150, borderRadius: 20, marginRight: 20 }}
                source={require('/React Native Project/DemoFirst/images/poster4.jpg')} />
            </ScrollView>
          </View>
        </View>

        <View style={{  marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft:20 }}>Xe nổi bật</Text>
        
        
            <FlatList
            horizontal
              data={DATA}
            renderItem={({ item }) =>
                  <View style={{ flexDirection: 'row', padding: 10, backgroundColor: '#E0EEEE',width: Dimensions.get('window').width}}>
                    <View style={{ flexDirection: 'column' }}>
                      <Image style={{ width: 120, height: 80 }}
                        source={require('/React Native Project/DemoFirst/images/lamborghini.jpg')} />
                      <Text>{item.priceRent}</Text>
                      <Text style={{ color: 'red', fontFamily:'brownies cake' }}>-5% khi thanh toán online</Text>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                      <Text>{item.title}</Text>
                      <Rating
                        style={{ marginLeft: -60 }}
                        type='rocket'
                        ratingCount={5}
                        imageSize={20}
                        readonly={true}
                        startingValue={Number(item.rating) }
                      />
                    </View>
                  </View>
            }
          />
          
        


        </View>

        <Dialog
            onDismiss={() => {
              setDefaultAnimationDialog(false);
            }}
            width={0.9}
            visible={defaultAnimationDialog}
            rounded
            actionsBordered
            dialogTitle={
              <DialogTitle
                title="Default Animation Dialog Simple"
                style={{
                  backgroundColor: '#F7F7F8',
                }}
                hasTitleBar={false}
                align="left"
              />
            }
            footer={
              <DialogFooter>
                <DialogButton
                  text="OK"
                  bordered
                  onPress={() => {
                    setDefaultAnimationDialog(false);
                  }}
                  key="button-2"
                />
                <DialogButton
                  text="CANCEL"
                  bordered
                  onPress={() => {
                    setDefaultAnimationDialog(false);
                  }}
                  key="button-1"
                />
              </DialogFooter>
            }>
            <DialogContent
              style={{
                backgroundColor: '#F7F7F8',
              }}>
              <Text>
                Here is an example of default animation dialog
              </Text>
            </DialogContent>
          </Dialog>

      </ScrollView>
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

export default HomeScreen;
