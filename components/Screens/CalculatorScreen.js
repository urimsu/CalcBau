import React, {useState} from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  TextInput
} 
  from 'react-native';

  function addZehn(n){
    return parseInt(n)+10;
  }
  
  function mal(n,m){
    return parseInt(n)*parseInt(m);
  }

  function CalculatorScreen() {
    const [preis,setPreis]=useState();
    const [qm,setQm]=useState();
    return (
      <View style={styles.Container}>
        <Text style={styles.Text}>Calc Screen</Text>
        <TextInput style={{borderWidth:1}} value={preis} onChangeText={setPreis} keyboardType='numeric'></TextInput>
        <TextInput style={{borderWidth:1}} value={qm} onChangeText={setQm} keyboardType='numeric'></TextInput>
        <Text>{ preis != 0 && qm != 0 ? mal(preis,qm) : 0}€</Text>
      </View>
    );
  }

const styles=StyleSheet.create({
Container:{
    flex:1,
    backgroundColor:'darkseagreen',
    justifyContent:"center"
},
Text:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
}
});

  export default CalculatorScreen;