import { SafeAreaView, Image, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../Styles/styles";


export default function Dashboard() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style = {styles.containerni}>
        <View style = {styles.container2} >
        <TouchableOpacity style = {styles.top_ni}>
            <TouchableOpacity   onPress={() => {
                navigation.navigate('Dashboard');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/tinyLogo.png')} />
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
            <Image style={styles.tiny_logo} source={require('../../img/mapnot.png')} />
            </TouchableOpacity>

            <TouchableOpacity   onPress={() => {
                navigation.navigate('Profile');
            }}>
            <Image style={styles.tiny_logo} source={require('../../img/profnot.png')} />
            </TouchableOpacity>
       
            
         </TouchableOpacity>
         
        <View style={{justifyContent:'center', alignContent:'center', flex:1, marginBottom:60}}>
         <View style = {styles.dash}>
            <TouchableOpacity style = {styles.population}
             onPress={() => {
                navigation.navigate('Resident');
            }}>
                <Image style={styles.icon_ni} source={require('../../img/resident.png')} />
                <Text style = {styles.text_gamay}>Total Resident</Text>
            </TouchableOpacity>
         
            <TouchableOpacity style = {styles.population}
             onPress={() => {
                navigation.navigate('Household');
            }}>
                <Image style={styles.icon_ni} source={require('../../img/home.png')} />
                <Text style = {styles.text_gamay}>Total Household</Text>
            </TouchableOpacity>
        </View>
        <View style = {styles.dash}>

        <TouchableOpacity style = {styles.population}
            onPress={() => {
                navigation.navigate('AddResident');
            }}> 
                <Image style={styles.icon_ni} source={require('../../img/add.png')} />
                <Text style = {styles.text_gamay}>Add Resident</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.population}
             onPress={() => {
                navigation.navigate('Report');
            }} >
                <Image style={styles.icon_ni} source={require('../../img/report.png')} />
                <Text style = {styles.text_gamay}>Report</Text>
         </TouchableOpacity>

            

        </View>
        <View style = {styles.dash}>

        <TouchableOpacity style = {styles.population}
             onPress={() => {
                navigation.navigate('Map');
            }}>
                <Image style={styles.icon_ni} source={require('../../img/map.png')} />
                <Text style = {styles.text_gamay}>Map</Text>
            </TouchableOpacity>


         <TouchableOpacity style = {styles.population}
            onPress={() => {
                navigation.navigate('Profile');
            }}> 
                <Image style={styles.icon_ni} source={require('../../img/profile.png')} />
                <Text style = {styles.text_gamay}>Profile</Text>
            </TouchableOpacity>
         </View>
        </View>
    </View>
</SafeAreaView>

        
    )
}