import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity
} 
  from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconA from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

function HomeButton(){
    const navigation=useNavigation();
    return(
    <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
            <TouchableOpacity onPress={()=>navigation.navigate("Calculator")}>
                <Icon name="menuunfold" size={40} color= 'black' />
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Icon name="home" size={40} color= 'black'/>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{
                navigation.navigate("Home");
                navigation.navigate("Rechnung");
            }} >
                <IconA name="receipt" size={40}  color= 'black'/>
            </TouchableOpacity>
        </View>
    </View>
   );
}
const styles=StyleSheet.create({

    NavContainer:{
        position:'absolute',
        alignItems:'center',
        bottom:'5%',
        marginLeft:'14%',
    } ,
    NavBar:{
        flexDirection:'row',
        backgroundColor:'#D0E4C3',
        width:'90%',
        justifyContent:'space-around',
        borderRadius:40,
        padding:20,
    }
});
export default HomeButton;