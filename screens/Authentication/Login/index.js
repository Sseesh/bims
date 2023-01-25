import { useState } from "react";
import { Image, Text, View, TextInput, Button, SafeAreaView, TouchableOpacity  } from 'react-native';
import styles from "../../../Styles/styles";



export default function Login({navigation}) {
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    return (

        <View style={styles.container}>
        <Image style={styles.window_logo_mini} source={require('../../../img/bimsLogo.png')} />

        <TextInput
        style={styles.input} 
        placeholder='Email Address' 
        value={data.email}
        onChangeText={text => {setData({...data,email: text})}}/>
        
        <TextInput 
        secureTextEntry = {true}
        style={styles.input} 
        placeholder='Password' 
        value={data.password}
        onChangeText={text => {setData({...data,password: text})}}
        />
  
  <TouchableOpacity style = {styles.button_ni} 
        
        onPress={() => {

          if (data.email!=''&&data.password!=''){
            if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
              if (data.email == global.email && data.password == global.password){
                setData({
                  email: '',
                  password: '',
                })
                navigation.replace('Dashboard')
                
              }else{
                alert("Invalid Credentials")
              }
            }else{
              alert("Invalid Email")
            }
          }else if (data.email!=''&&data.password==''){
            alert("Please Input Password")
          }else if (data.email==''&&data.password!=''){
            alert("Please Input Email")
          }else{
            alert("Please Input Credentials")
          }
        } }>
          <Text style = {styles.button_text}>Login</Text>
            </TouchableOpacity>


        <Text style={styles.hyper} onPress={() => {
          setData({
            email: '',
            password: '',
            })
            navigation.navigate('Forgot Password'); }}>Forgot Password?</Text>
        <Text style={styles.hyper} onPress={() => {
          setData({
            email: '',
            password: '',
            })
           navigation.navigate('Register'); }}>Don't have an account? Register</Text>
        
      </View>

    );
  }