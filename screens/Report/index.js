import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native';

import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';



const Table = () => {
 
const navigation =useNavigation();

  return (


    <SafeAreaView style={{width:'100%', height: '100%', justifyContent:'center', flex:1, marginTop:30, marginBottom:20}}>
       <View style = {styles.top_ni}>
       <TouchableOpacity   onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/dashnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Resident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/resnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Household');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/housenot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('AddResident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/addnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Report');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/reportact.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Map');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/mapnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/profnot.png')} />
            </TouchableOpacity>
         </View>
         <Text style={{ padding: 10, fontWeight: 'bold', backgroundColor: '#e6ebff', elevation: 10, color:'#4267B2'}}>Report</Text>
            <Text></Text>
           
            <ScrollView>
              <View >
              
              <Text></Text>
              </View>

              <View  style={{alignSelf:'center',  width: '90%', height: 300, borderWidth:1, borderColor:'#4267B2', justifyContent:'center', backgroundColor:'#e6ebff'}}>
                  <Image style={{width: 150, height:150, alignSelf:'center'}} source={require('../../img/nodata.png')} />
                  <Text style={{alignSelf:'center'}}>Under Consturtion</Text>
              </View>
              <Text></Text>
              <Text></Text>
              <View  style={{alignSelf:'center',  width: '90%', height: 300, borderWidth:1, borderColor:'#4267B2',justifyContent:'center', backgroundColor:'#e6ebff'}}>      
                <Image style={{width: 150, height:150, alignSelf:'center'}} source={require('../../img/nodata.png')} />
                <Text style={{alignSelf:'center'}}> Under Construction</Text>
              </View>

              </ScrollView>
            </SafeAreaView>
  );

};

export default Table;