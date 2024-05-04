import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import DataSet from '../../DataBank/DataSet.js'
import { useNavigation } from '@react-navigation/native';


const Item = ({ name,preis, onPress, image }) => (
  <TouchableOpacity style={styles.item}
  onPress={onPress} >
    <Image style={styles.tinyLogo} source={image} />
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.preisText}> {preis}€/qm</Text>
  </TouchableOpacity >
);

const CalculatorScreen = () => {
  //console.log(DataSet);
  const navigation=useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DataSet}
        renderItem={({ item }) =>
          <Item name={item.Name} preis={item.Preis} onPress={()=>navigation.navigate("Home")} image={item.Bild} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'darkseagreen',
  },
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

export default CalculatorScreen;