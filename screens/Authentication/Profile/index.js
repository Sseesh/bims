import { Text, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../Styles/styles';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native-gesture-handler';

export default function Profile({navigation}) {
  const formData = useSelector(state => state.formData);
  const nav =useNavigation();

  return (
    <View style={{width:'100%', height: '100%',marginTop:30}}>

          <View style = {styles.top_ni}>
          <TouchableOpacity   onPress={() => {
                nav.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/dashnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('Resident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/resnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('Household');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/housenot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('AddResident');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/addnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('Report');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/reportnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('Map');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/mapnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                nav.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../../img/profact.png')} />
            </TouchableOpacity>
         </View>

       
            <View  style={{ width: '100%', height: '35%', backgroundColor: '#e6ebff',  }}>
                <TouchableOpacity style = {{borderWidth: 1, 
                                              borderColor: '#4267B2', 
                                              width: 100,
                                              height: 35, 
                                              padding: 5, 
                                              marginBottom: 40, 
                                              fontSize: 15, 
                                              borderRadius: 15,
                                              alignContent: 'center',
                                              position: 'absolute', right: 10,
                                             
                                              marginTop:20}} 
                          onPress={() => {
                          navigation.navigate('Home')
                          alert("Account Logged out")
                          } }>
                        <Text style = {{color:'#4267B2', alignSelf:'center'}}>Logout</Text>
                  </TouchableOpacity>


                  <TouchableOpacity style={{ backgroundColor:'white',   
                                    width: 100, height:100, borderRadius:100, 
                                    alignContent:'center', marginLeft:10, marginBottom:10, marginTop:20}}>

                    <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:70, color:'#4267B2'}}>{global.firstName.substring(0, 1)}</Text>
                  </TouchableOpacity>

                  <Text style={{color:'#4267B2', fontWeight:'bold', fontSize:20, marginLeft:20 }}>{global.firstName + " " + global.lastName}{"\n"}</Text>
                  <Text style={{color:'#4267B2', fontWeight:'bold', fontSize:15, marginLeft:20}}>Role: {global.role} </Text>
                  
                  <Text style={{color:'#4267B2', fontWeight:'bold', fontSize:15, marginLeft:20}}>Address: {global.barangay} </Text>
                  <Text style={{color:'#4267B2', fontWeight:'bold', fontSize:15, marginLeft:20, marginBottom:5}}>Email Address: {global.email}</Text>
                </View>
              
      <Text style={{ padding: 5, fontWeight: 'bold', fontSize:15, backgroundColor: '#d3d3d3', alignSelf:'center', width:'100%', borderBottomWidth:1, borderBottomColor:'#8a8a8a'}}>Logs:</Text>
      
      <ScrollView horizontal contentContainerStyle={{width: 2680}}>
        <ScrollView vertical={true}>
      
          <View style={styles.tableRow}>
                <Text style={styles.gender_ni1}>Action</Text>
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
                <Text style={styles.gender_ni1}>Add</Text>

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
            
                  <TouchableOpacity style={styles.gender_ni1}>
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
                                        height: '100%',
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
                                
                                alignSelf:'center'}} source={require('../../../img/update.png')} />
                    </TouchableOpacity>


           
    </View>
     
))}
</ScrollView>
</ScrollView>

           
    </View>
  );
}
