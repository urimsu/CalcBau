import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

const SteinArt = ({ name,preis, onPress, image }) => (
    <TouchableOpacity style={styles.item}
    onPress={onPress} >
      <Image style={styles.tinyLogo} source={image} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.preisText}> {preis}€/qm</Text>
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
      width: 50,
      height: 50,
      marginRight:25,
    },
    nameText:{
      flex:1,
      flexWrap:'wrap',
    },
    preisText:{
      
      marginLeft:10,
    }
  });
export default SteinArt;