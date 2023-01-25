import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';

import { useState } from 'react';



const Table = () => {
  const formData = useSelector(state => state.formData);
  const navigation = useNavigation();
  const [data, setData] = useState('');
  

  return (


    <SafeAreaView style={{width:'100%', height: '100%', alignContent:'center', marginTop:30}}>

        <TouchableOpacity style = {styles.top_ni}>
        <TouchableOpacity   onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/dashnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Resident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/resact.png')} />
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
            <Image style={styles.tiny_logo} source={require('../../img/mapnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/profnot.png')} />
            </TouchableOpacity>
         </TouchableOpacity>
        
        <Text style={{ padding: 10, fontWeight: 'bold', backgroundColor: '#e6ebff', elevation: 10}}>Total Resident: {formData.length}</Text>
        
        <TextInput
            style={{borderWidth: 1, 
              borderColor: '#96b2ea', 
              width: '80%', 
              padding: 5, 
              marginTop: 10, 
              fontSize: 15, 
              borderRadius: 15,
              textAlign: 'center',
              alignSelf:'center',
              justifyContent: 'center', 
           
                }} 
                placeholder='Search'
                value={data}
                onChangeText={text => setData(text)}
                />
            
                
 
        <ScrollView horizontal contentContainerStyle={{width: 2580}}>
        <ScrollView vertical={true} >
      
            <View style={styles.tableRow}>
          
                <Text style={styles.gender_ni1}>ID #</Text>
                <Text style={styles.table_ni2}>Last Name</Text>
                <Text style={styles.table_ni1}>First Name</Text>
                <Text style={styles.table_ni2}>Middle Name</Text>
                <Text style={styles.age_ni1}>Age</Text>
                <Text style={styles.gender_ni1}>Gender</Text>
                <Text style={styles.table_ni2}>Birthdate</Text>
                <Text style={styles.table_ni2}>Birthplace</Text>
                <Text style={styles.table_ni1}>Civil Status</Text>
                <Text style={styles.gender_ni1}>Blood Type</Text>
                <Text style={styles.table_ni2}>Religion</Text>
                <Text style={styles.table_ni2}>Total Household Member</Text>
                <Text style={styles.table_ni2}>Occupation</Text>
                <Text style={styles.table_ni2}>Nationality</Text>
                <Text style={styles.table_ni2}>Educational Attainment</Text>
                <Text style={styles.table_ni1}>Household No.</Text>
                

            </View>
    
            
            {formData.map((item, index) => (


            <View key={index} style={styles.tableRow}>
                
              

                <TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{index + 1}</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={styles.table_ni2}>
                
                    <Text style={styles.tableCellText}>{item.lastName}</Text>
                </TouchableOpacity>
                
                    <TouchableOpacity style={styles.table_ni1}>
                
                    <Text style={styles.tableCellText}>{item.firstName}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.middleName}</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity style={styles.age_ni1}>
                    <Text style={styles.tableCellText}>{item.age}</Text>
                    </TouchableOpacity>
            
                < TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{item.gender}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.birthDate}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.birthPlace}</Text>
                    </TouchableOpacity>

                    < TouchableOpacity style={styles.table_ni1}>
                <Text style={styles.tableCellText}>{item.civilStatus}</Text>
                </TouchableOpacity>


                    <TouchableOpacity style={styles.gender_ni1}>
                    <Text style={styles.tableCellText}>{item.bloodType}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.religion}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.totalH}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.occupation}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.nationality}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.table_ni2}>
                    <Text style={styles.tableCellText}>{item.educ}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{borderrightWidth: 1,
                                        borderrightColor: '#d3d3d3',
                                        width: 100,
                                        height: 35, 
                                        padding: 5, 
                                        borderBottomWidth: 1,
                                        borderBottomColor: 'black' ,
                                        fontWeight: 'bold',}}>
                    <Text style={styles.tableCellText}>{item.houseHold}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.age_ni1}
                        onPress={() => {
                            alert ('This feature is under construction')
                        }}>
                    <Image style={{width:30,
                                height: 25,
                                marginRight:20,
                                resizeMode: "contain",
                                alignSelf:'center'}} source={require('../../img/update.png')} />

                    </TouchableOpacity>

            </View>
            
            ))}
            </ScrollView>
            </ScrollView>

            

            <View style={{flexDirection: 'row', justifyContent:'center', marginBottom:45 }}>
                        <TouchableOpacity style = {styles.add} 
                        onPress={() => {
                            navigation.navigate('AddResident');
                        }}>
                        <Text style = {styles.button_text}>Add Resident</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style = {styles.delete} 
                        onPress={() => {
                            alert ('Please Select an Item')
                        }}>
                            <Text style = {styles.button_text}>Delete</Text>
                        </TouchableOpacity>
            </View>
   
    </SafeAreaView>
  );
    
};

export default Table;