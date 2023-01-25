import { useState } from "react";
import { Image, TouchableOpacity, TextInput, ScrollView, View, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from "../../../Styles/styles";

export default function Registration() {
    const navigation = useNavigation();
    const [data, setData] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        role:'',
        password1: '',
        password2: ''
    })
    return (
      <ScrollView contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      }}>
        <View style={styles.container}>
        <Text ></Text>
        <Text ></Text>
          <Image style={styles.window_logo_mini} source={require('../../../img/bimsLogo.png')} />
          
          <Text style={styles.lable}></Text>
          
          <TextInput
          style={styles.input} 
          placeholder='First Name' 
          value={data.firstName}
          onChangeText={text => {setData({...data,firstName: text})}}/>
          
          <TextInput
          style={styles.input} 
          placeholder='Last Name' 
          value={data.lastName}
          onChangeText={text => {setData({...data,lastName: text})}}/>
          
          <TextInput
          style={styles.input} 
          placeholder='Email Address' 
          value={data.email}
          onChangeText={text => {setData({...data,email: text})}}/>
          
          <TextInput
          style={styles.input} 
          placeholder='Address: (Barangay, Municipality/City)' 
          value={data.barangay}
          onChangeText={text => {setData({...data,barangay: text})}}/>

          <TextInput
          style={styles.input} 
          placeholder='Your role as barangay worker'
          value={data.role}
          onChangeText={text => {setData({...data,role: text})}}/>


          <TextInput 
          secureTextEntry = {true}
          style={styles.input} 
          placeholder='Password' 
          value={data.password}
          onChangeText={text => {setData({...data,password: text})}}/>
          
          <TextInput 
          secureTextEntry = {true}
          style={styles.input} 
          placeholder='Confirm Password' 
          value={data.confirmPassword}
          onChangeText={text => {setData({...data,confirmPassword: text})}}/>

        <TouchableOpacity style = {styles.button_ni} 
            
          onPress={() => {
            
            if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.barangay!=''&&data.password!=''&&data.confirmPassword!=''){
              if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){         
                if (data.password==data.confirmPassword){
                  if (data.password.length>8 && data.password.length>8){
                   
                    global.firstName = data.firstName
                    global.lastName = data.lastName
                    global.email = data.email
                    global.barangay = data.barangay
                    global.role = data.role
                    global.password = data.password
                    global.logged_in = true
                    setData({
                      name1: '',
                      name2: '',
                      username: '',
                      email: '',
                      barangay: '',
                      password1: '',
                      password2: '',
                    })
                    navigation.replace('Dashboard');
                    alert("Account Logged in")
                    alert("Account Registered")
                  }else{
                    alert("Password too weak")
                  }              
                }else{
                  alert("Password not match")
                }
              }else{
                alert("Invalid Email")
              }
            }else{
              if (data.firstName==''&&data.lastName!=''&&data.email!=''&&data.barangay!=''&&data.password!=''&&data.confirmPassword!=''){
                alert("Please Input Firstname")
              }else if (data.firstName!=''&&data.lastName==''&&data.email!=''&&data.barangay!=''&&data.password!=''&&data.confirmPassword!=''){
                alert("Please Input Lastname")
              }else if (data.firstName!=''&&data.lastName!=''&&data.email==''&&data.barangay!=''&&data.password!=''&&data.confirmPassword!=''){
                alert("Please Input Valid email")
              }else if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.barangay!=''&&data.password==''&&data.confirmPassword!=''){
                alert("Please Input Password")
              }else if (data.firstName!=''&&data.lastName!=''&&data.email!=''&&data.barangay!=''&&data.password!=''&&data.confirmPassword==''){
                alert("Please Confirm password")
              }else if (data.firstName==''||data.lastName==''||data.email==''||data.barangay==''||data.password==''||data.confirmPassword==''){
                  alert("Please Input Credentials")
                }
            }        
          } }>
            <Text style = {styles.button_text}>Register</Text>
            </TouchableOpacity>
            <Text ></Text>
        <Text ></Text>
        <Text ></Text>
        <Text ></Text>
            </View>
        </ScrollView>
      );
    }