import React, { useState } from 'react';
import { View, TextInput, Image, TouchableOpacity, Text, ScrollView, SafeAreaView } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from '../../Styles/styles';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [houseHold, setHouseHold] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [age, setAge] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Zone, setZone] = useState('');
  const [civilStatus, setCivilStatus] = useState('');
  const [gender, setGender] = useState('');
  const [GovernmentProg, setGovernmentProg] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [religion, setReligion]=useState('');
  const [educ, setEduc]=useState('');
  const [totalH, setTotalH]=useState('');
  const [occupation, setOccupation]=useState('');
  const [nationality, setNationality]=useState('');



  const handleSubmit = () => {
 if (houseHold!=''&&firstName!=''&&lastName!=''&&middleName!=''&&gender!=''&&birthDate!=''&&birthPlace!=''&&civilStatus!=''&&age!=''){
    dispatch({
      type: 'ADD_FORM_DATA',
      payload: {
        houseHold,
        firstName,
        middleName,
        lastName,
        birthDate,
        birthPlace,
        age,
        Email,
        Phone,
        Zone,
        gender,
        civilStatus,
  bloodType,
        religion,
        educ,
        totalH,
        occupation,
        nationality,
      },
      
    });
    setHouseHold('');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setBirthDate('');
    setBirthPlace('');
    setAge('');
    setEmail('');
    setPhone('');
    setZone('');
    setGender('');
    setCivilStatus ('');

    setBloodType('');
    setReligion('');
    setEduc('');
    setTotalH('');
    setOccupation('');
    setNationality('');
    alert('Submitted')
   }
    else{
      alert('Please Complete the Form')
  }
  };
    //inputtext style when active
  const [focused, setFocused] = useState({houseHold: false, firstName: false, middleName:false, lastName: 
    false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, gender:false, 
    civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,});

    return (
    <SafeAreaView style={styles.form_container}>
       <TouchableOpacity style = {styles.top_ni}>
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
            <Image style={styles.tiny_logo} source={require('../../img/addact.png')} />
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
         
    <ScrollView scontentContainerStyle={{
      width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
    }}>

    <View style={styles.container3}>
    <Text> Household No.:</Text>
    <TextInput 
    value={houseHold}
    onChangeText={text => setHouseHold(text)}
    style={focused.houseHold ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: true, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false,  civilStatus:false, gender: false})}
    onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
      civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
    />

    <Text> First Name:</Text>
    <TextInput 
    value={firstName}
    onChangeText={text => setFirstName(text)}
    style={focused.firstName ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: true, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />
    
    <Text> Middle Name:</Text>
    <TextInput 
      value={middleName}
    onChangeText={text => setMiddleName(text)}
    style={focused.middleName ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:true, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Last Name:</Text>
    <TextInput 
    value={lastName}
    onChangeText={text => setLastName(text)}
    style={focused.lastName ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      true, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />
    <Text> Birthdate:</Text>
    <TextInput 
    value={birthDate}
    onChangeText={text => setBirthDate(text)}
    style={focused.birthDate ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:true, Email:false, Phone:false, Zone:false,  civilStatus:false, })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Birthplace:</Text>
    <TextInput 
    value={birthPlace}
    onChangeText={text => setBirthPlace(text)}
    style={focused.birthPlace ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, birthPlace:true, Email:false, Phone:false, Zone:false, civilStatus:false, gender: false})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />
    <Text> Age:</Text>
    <TextInput 
    value={age}
    onChangeText={text => setAge(text)}
    style={focused.age ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: true, birthDate:false, Email:false, Phone:false, Zone:false,  civilStatus:false, gender: false})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />
    <Text> Gender:</Text>
    <TextInput 
    value={gender}
    onChangeText={text => setGender(text)}
    style={focused.gender ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false,  civilStatus:false, gender:true})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Civil Status:</Text>
    <TextInput 
    value={civilStatus}
    onChangeText={text => setCivilStatus(text)}
    style={focused.civilStatus ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false,  civilStatus:true, gender:false})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Blood Type:</Text>
    <TextInput 
    value={bloodType}
    onChangeText={text => setBloodType(text)}
    style={focused.bloodType ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({bloodType: true, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, civilStatus:false, gender: false})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, gender:false, 
        civilStatus:false,   bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Religion:</Text>
    <TextInput 
    value={religion}
    onChangeText={text => setReligion(text)}
    style={focused.religion ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({religion:true, bloodType: false, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false,  
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Total Household Member:</Text>
    <TextInput 
    value={totalH}
    onChangeText={text => setTotalH(text)}
    style={focused.totalH ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({totalH: true, religion:false, bloodType: false, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false,  civilStatus:false, gender: false})}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Occupation:</Text>
    <TextInput 
    value={occupation}
    onChangeText={text => setOccupation(text)}
    style={focused.occupation ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({occupation: true, totalH: false, religion:false, bloodType: false, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, nationality:false })}
      onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
        false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
        civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
      />

    <Text> Nationality:</Text>
    <TextInput 
    value={nationality}
    onChangeText={text => setNationality(text)}
    style={focused.nationality ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({nationality: true, occupation: false, totalH: false, religion:false, bloodType: false, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, })}
    onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
      civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
    />  


    <Text> Educational Attainment:</Text>
    <TextInput 
    value={educ}
    onChangeText={text => setEduc(text)}
    style={focused.educ ? styles.textInputFocused : styles.textInput}
    onFocus={() => setFocused({nationality: false, occupation: false, totalH: false, religion:false, bloodType: false, houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, Email:false, Phone:false, Zone:false, gender:false, civilStatus:false, educ:true })}
    onBlur={() => setFocused({houseHold: false, firstName: false, middleName:false, lastName: 
      false, age: false, birthDate:false, birthPlace:false, Email:false, Phone:false, Zone:false, 
      civilStatus:false, gender: false,  bloodType: false, religion:false,educ: false,totalH: false,occupation:false,nationality:false,})}
    />  

        <Text></Text>
    <TouchableOpacity style={styles.button_ni}
      onPress={() => handleSubmit()}
      >
      <Text style={styles.button_text}>Submit</Text>
    </TouchableOpacity>

    </View>
    </ScrollView>
    </SafeAreaView>
    );
    };
    
    export default Form;