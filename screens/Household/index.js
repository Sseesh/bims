import { View, Text, TouchableOpacity,  FlatList, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from '../../Styles/styles';
import { groupBy } from 'lodash';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';



const GroupedData = () => {
  const navigation = useNavigation();
  const entries = useSelector(state => state.formData);
  const [groupedData, setGroupedData] = useState({});
  const totalhouseHolds = Object.keys(groupedData).length

  
  useEffect(() => {
    setGroupedData(groupBy(entries, 'houseHold'));
  }, [entries]);

  return (
    <View style={{height:'100%', marginTop:30}}>
      <View style={{ flexDirection: 'column',    }}>

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
            <Image style={styles.tiny_logo} source={require('../../img/houseact.png')} />
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
          </View>

         <Text style={{ width:'100%', textAlign: 'left', padding: 10, fontWeight: 'bold',  backgroundColor: '#e6ebff', 
          elevation: 10, opacity: 1,
          }}>Total Household: {totalhouseHolds}</Text>
      </View>
      <Text></Text>
    <FlatList
    data={Object.entries(groupedData)}
    renderItem={({ item }) => {
      const [houseHold, entries] = item;
      return (
        
        <ScrollView>
        <ScrollView horizontal contentContainerStyle={{width: 2450}}>
            <View style={{ flexDirection: 'column', borderWidth: 1, borderColor: 'black',  }}>
              <Text style={{ padding: 10, fontWeight: 'bold', backgroundColor: '#d3d3d3', textAlign: 'left',}}>Household No. {houseHold} </Text>
              

              <View style={styles.tableRow}>

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

          <FlatList
            data={entries}
            keyExtractor={(item) => item.firstName}
            renderItem={({ item }) => {
              return (
                
                    <View  style={styles.tableRow}>

                        <View style={styles.table_ni2}>
                        
                            <Text style={styles.tableCellText}>{item.lastName}</Text>
                            
                        </View>

                        <View style={styles.table_ni1}>
                            <Text style={styles.tableCellText}> {item.firstName}</Text>
                        </View>
                      
                        <View style={styles.table_ni2}>
                        <Text style={styles.tableCellText}>{item.middleName}</Text>
                        </View >
              
                        <View  style={styles.age_ni1}>
                        <Text style={styles.tableCellText}>{item.age}</Text>
                        </View>
                  
                      < View  style={styles.gender_ni1}>
                        <Text style={styles.tableCellText}>{item.gender}</Text>
                        </View >

                        <View  style={styles.table_ni2}>
                        <Text style={styles.tableCellText}>{item.birthDate}</Text>
                        </View >

                        <View style={styles.table_ni2}>
                        <Text style={styles.tableCellText}>{item.birthPlace}</Text>
                        </View >

                        < View  style={styles.table_ni1}>
                        <Text style={styles.tableCellText}>{item.civilStatus}</Text>
                        </View >

                        <View  style={styles.gender_ni1}>
                          <Text style={styles.tableCellText}>{item.bloodType}</Text>
                          </View >

                        <View  style={styles.table_ni2}>
                        <Text style={styles.tableCellText}>{item.religion}</Text>
                        </View >

                          <View  style={styles.table_ni2}>
                          <Text style={styles.tableCellText}>{item.totalH}</Text>
                          </View >

                          <View  style={styles.table_ni2}>
                          <Text style={styles.tableCellText}>{item.occupation}</Text>
                          </View >

                          <View  style={styles.table_ni2}>
                          <Text style={styles.tableCellText}>{item.nationality}</Text>
                          </View >

                          <View  style={styles.table_ni2}>
                          <Text style={styles.tableCellText}>{item.educ}</Text>
                          </View >

                      <View  style={styles.table_ni1}>
                      <Text style={styles.tableCellText}>{item.houseHold}</Text>
                      </View >


                    </View>
              )
            }}
          />
        </View>
        </ScrollView>
        </ScrollView>
        
      )
    }}
    keyExtractor={(item) => item[0]}
  />
 
  </View>
)
}
export default GroupedData;