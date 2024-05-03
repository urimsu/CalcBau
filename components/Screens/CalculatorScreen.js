import React from 'react'
import { 
  Text, 
  View, 
  StyleSheet
} 
  from 'react-native';


  function CalculatorScreen() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Text}>Calc Screen</Text>
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