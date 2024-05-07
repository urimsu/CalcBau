
import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Button,
  TextInput
} from 'react-native';
import Cart from '../../DataBank/Temp/Cart';


const SteinInformationDisplay = ({ name, preis, SteinBild }) => (
  <View style={styles.item}>
    <Image style={styles.bild} source={SteinBild} />
    <Text style={styles.nameText}>{name}</Text>
    <Text style={styles.preisText}> {preis}€/qm</Text>
  </View >
);

function addCart(name,quantity,preis){
  let x = parseInt(quantity)*preis;
  Cart.push(name);
  Cart.push(x);
}

const DisplayCart=()=>{
  // for(let i =0 ; i< Cart.length ; i++){
  //   <Text>{Cart[i]}</Text>
  // }
  <View>
  <Text>test</Text>
  </View>
  // <Text></Text>
}

function SteinInfoScreen({ route }) {
  const { SteinName, SteinPreis, SteinBild } = route.params;
  const[Quantity,setQuantity]=useState('');

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
      <Button title={"test"} 
      onPress={()=>
        {addCart(SteinName,Quantity,SteinPreis); 
        setQuantity(null);
        }}/>
      <Button title={"delete"} onPress={()=>Cart.splice(0,Cart.length)}/>
      <Button title={"druck"} onPress={()=>console.log(Cart)}/>
        <DisplayCart/>
          {/* <Text>YOUOR CART: {Cart[0]} : {Cart[1]}</Text> */}

    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  bild: {
    height: 200,
    width: 200,
    borderRadius: 40,
    alignSelf: 'center'
  },
  preisText: {
    textAlign: 'center',
    fontSize: 20,
  },
  input: {
    height: 60,
    width:200,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius:20
  },
});


export default SteinInfoScreen;