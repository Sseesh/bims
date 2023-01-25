import React from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../../Styles/styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

 
const LargeImageScreen = () => {
const [location, setLocation] = useState('');
const navigation = useNavigation();
  return (
    <View style={{marginTop:30}}>
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
            <Image style={styles.tiny_logo} source={require('../../img/reportnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Map');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/mapact.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/profnot.png')} />
            </TouchableOpacity>
         </View>
       
            
      <View style={{width:'100%', height:'100%'}}>
     <ScrollView contentContainerStyle={{height: 1000, }}>
    <ScrollView horizontal contentContainerStyle={{width: 1000}}>

        <Image 
          style={{ width: 1000, height: 1000, }} source={require('../../img/mapimage.jpg')} 
         
        />
        </ScrollView>
      </ScrollView>

      <View style={{flexDirection: 'row', justifyContent:'center', marginBottom:45, position:'absolute', bottom:70,
              }}>
                        <TouchableOpacity style = {styles.add} 
                        onPress={() => {
                            alert('This feature is under construction')
                        }}>
                        <Text style = {styles.button_text}>Add Map+</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.delete} 
                        onPress={() => {
                          alert('This feature is under construction')
                        }}>
                            <Text style = {styles.button_text}>Remove</Text>
                        </TouchableOpacity>
              </View>
      <TextInput
            style={{borderWidth: 1, 
              borderColor: '#4267B2', 
              width: '80%', 
              padding: 5, 
              marginBottom: 10, 
              fontSize: 15, 
              borderRadius: 15,
              textAlign: 'center',
              alignSelf:'center',
              justifyContent: 'center', position:'absolute', top:20,
              backgroundColor:'white', opacity: 0.8,
              elevation: 10,
             

            }} 
            placeholder='Search'
            value={location}
            onChangeText={text => setLocation(text)}
            />
            
  </View>
    </View>
  );
};

export default LargeImageScreen;