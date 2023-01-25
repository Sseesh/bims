import { useNavigation } from "@react-navigation/native";
import { Image, Text, View, } from "react-native";
import styles from "../../Styles/styles";


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style = {styles.container}>

            <Image style={styles.window_logo} source={require('../../img/bimsLogo.png')} />

            <Text style = {styles.title}>BIMS</Text>

            <Text style={styles.hyper} onPress={() => {
                navigation.navigate('Login');
            }}>
                Login
            </Text>

            <Text style={styles.hyper} onPress={() => {
                navigation.navigate('Register');
            }}>
                Register
            </Text>
            
        </View>
    )
    
}
