
import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Cart from '../../DataBank/Temp/Cart';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-ico-material-design';


const SteinInformationDisplay = ({ name, preis, SteinBild }) => (
  <View style={styles.AllObj}>
    <View style={styles.item}>
      <Image style={styles.bild} source={SteinBild} />
      <View style={styles.Schrift}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.preisText}> {preis}€/qm</Text>
      </View>
    </View >
    <View style={styles.InfoBox}>
      <Text>Folgende Infos haben wir über diesen PflasterSteine.</Text>
    </View>
  </View>
);

function addCart(name, quantity, preis,index) {
  let x = parseInt(quantity) * preis;
  Cart.push({ name, x, quantity,index});
}

function newIndex(){
  let lastIndexAt=0;
  if(Cart[0]!=null){
  for (let i=0;i<Cart.length;i++){
    lastIndexAt=i;
  }
  return Cart[lastIndexAt]["index"]+1;
}else{
  return 0;
}
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
      <View style={styles.InputField}>
        <TextInput
          style={styles.input}
          value={Quantity}
          onChangeText={setQuantity}
          placeholder="Wie viele?"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => {
            addCart(SteinName, Quantity, SteinPreis,newIndex());
            setQuantity(null);
          }}>
          <Icon name="add-plus-button" height="40" width="40" color='black' />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Buttons}
          onPress={() => 
            {
              navigation.navigate("Home");
              navigation.navigate("Rechnung");
              }}>
          <Icon name="receipt" height="40" width="40" color='black' />
        </TouchableOpacity>

      </View>
      <View style={styles.RechnungView}>
        <Text style={styles.Header}>
          Bisherige Auswahl:
         </Text>
        <FlatList
          style={styles.Rechnung}
          data={Cart}
          renderItem={({ item }) => 
            <View style={{flex:1, flexDirection:'row'}}>
           <Text style={styles.RechnungTextName}>{item.name}</Text>
            <Text style={styles.RechnungTextPreis}>{item.x} €</Text>
          </View>
        }
        />
      </View>
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
  AllObj: {
    height: 450,
    justifyContent: 'space-evenly',
  },
  item: {
    flex: 1 / 5,
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 80,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  InfoBox: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'space-evenly',
  },
  Schrift: {
    flex: 1,
  },
  bild: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 30,
    alignItems: 'flex-start',
  },
  nameText: {
    padding: 10,
    paddingTop: 20,
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',

  },
  preisText: {
    paddingLeft: 10,
    textAlign: 'left',
    fontSize: 15,
  },
  InputField: {
    flex: 1 / 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    height: 60,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 20
  },
  Buttons: {
    padding: 20
  },
  RechnungView: {
    flex: 1 / 5,
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 80,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'grey',
  },
  Header:{
    fontWeight:'bold',
    padding:10, 
    textAlign:'center',

  },
  Rechnung: {
    paddingBottom:'20%'
  },
  RechnungTextName:{
    flex:1,
    flexWrap:'wrap',
    textAlign:'left',
    padding:2,
    paddingLeft:7
  },
  RechnungTextPreis:{
    textAlign:'right',
     paddingRight:7
  }
});


export default SteinInfoScreen;