import { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import styles from "../../../Styles/styles";


export default function Forgotpass({navigation}) {
    const [data, setData] = useState({
      email: '',
      password: '',
    })
  
    return (
      <View style={styles.container}>
         <Image style={styles.window_logo_mini} source={require('../../../img/bimsLogo.png')} />
        <TextInput
        style={styles.input} 
        placeholder='Enter Email Address' 
        value={data.email}
        onChangeText={text => {setData({...data,email: text})}}/>
        
  
        <TouchableOpacity style = {styles.button_ni}  
        onPress={() => {
            if (data.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
                navigation.navigate('Dashboard')
                alert("Code Sent!")
            }else{
              alert("Invalid Email")
            }

          if (data.email==''){
            alert("Please Input Email")
          }
        } }>
        <Text style = {styles.button_text}>Send Code</Text>
            </TouchableOpacity>
        
        
      </View>
    );
  }