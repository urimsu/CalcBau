import React, { useState } from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
} from 'react-native';

function ReceiptScreen() {
    return (
      <View style={styles.Container}>
        <Text style={styles.Text}>Receipt Screen</Text>
      </View>
    );
  }
  const styles=StyleSheet.create({
    Container:{
      flex:1,
      backgroundColor:'darkseagreen',
      justifyContent:'flex-start'
    },
    Text:{
      fontWeight:'bold',
      fontSize:20,
      textAlign:'center',
    }
});
export default ReceiptScreen