
import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TextInput
} from 'react-native';
import Cart from '../../DataBank/Temp/Cart';
import { useNavigation } from '@react-navigation/native';


const SteinInformationDisplay = ({ name, preis, SteinBild }) => (
  <View style={styles.item}>
      <Image style={styles.bild} source={SteinBild} />
    <View style={styles.Schrift}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.preisText}> {preis}€/qm</Text>
    </View>
  </View >
);

function addCart(name, quantity, preis) {
  let x = parseInt(quantity) * preis;
  Cart.push({ name, x, quantity });
}


function SteinInfoScreen({ route }) {
  const { SteinName, SteinPreis, SteinBild } = route.params;
  const [Quantity, setQuantity] = useState('');

  const navigation = useNavigation();

  return (
    <View style={styles.Container}>
      <SteinInformationDisplay
        name={SteinName}
        preis={SteinPreis}
        SteinBild={SteinBild}
      />
      <TextInput
        style={styles.input}
        value={Quantity}
        onChangeText={setQuantity}
        placeholder="Wie viele?"
        keyboardType="numeric"
      />
      <Button title={"Add"}
        onPress={() => {
          addCart(SteinName, Quantity, SteinPreis);
          setQuantity(null);
        }} />
      <Button title="Zeige bisherige Rechnung" onPress={() => navigation.navigate("Rechnung")} />
      <FlatList
        data={Cart}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />

    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFECEC',
    justifyContent: 'flex-start',
    //alignItems: 'center',

  },
  item: {
    flex:1/5,
    flexDirection:'row',
    padding: 10,
    margin:10,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems:'center',
    borderWidth:1,
    borderColor:'grey',
    justifyContent:'space-evenly',
  },
  Schrift:{
    flex:1,
  },
  bild: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 30,
    alignSelf: 'left',
  },
  nameText: {
    padding:10,
    paddingTop:20,
    fontSize: 20,
    textAlign:'left',
    fontWeight: 'bold',

  },
  preisText: {
    paddingLeft:10,
    textAlign: 'left',
    fontSize: 15,
  },
  input: {
    height: 60,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20
  },
});


export default SteinInfoScreen;