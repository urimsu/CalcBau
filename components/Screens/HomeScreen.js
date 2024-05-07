
import React from 'react'
import { 
  Text, 
  View, 
  StyleSheet
} from 'react-native';


  function HomeScreen() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Text}>Home Screen</Text>
      </View>
    );
  }
const styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'#FFECEC',
    justifyContent:"center"
  },
  Text:{
    fontWeight:'bold',
    fontSize:20,
    textAlign:'center',
  }
});


  export default HomeScreen;