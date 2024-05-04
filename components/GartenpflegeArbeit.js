import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const GartenpflegeArbeit = ({ name, onPress,bild }) => (
    <TouchableOpacity style={styles.item}
    onPress={onPress} >
        <Image style={styles.tinyLogo} source={bild}/>
      <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity >
  );

  const styles = StyleSheet.create({

    item: {
      flex:1,
      flexDirection:'row',
      padding: 40,
      marginVertical: 10,
      marginHorizontal: 10,
      backgroundColor: 'white',
      borderRadius: 20,
      alignItems:'center',
      borderWidth:1,
      borderColor:'grey',
    },
    title: {
      fontSize: 32,
    },
    tinyLogo: {
      width: 70,
      height: 70,
      marginRight:25,
      borderRadius:20,
    },
    nameText:{
      flex:1,
      flexWrap:'wrap',
      fontSize:20
    },
    preisText:{
      
      marginLeft:10,
    }
  });
export default GartenpflegeArbeit;