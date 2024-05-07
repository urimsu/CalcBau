import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button,
  TextInput,
  Linking,
  KeyboardAvoidingView
} from 'react-native';
import Cart from '../../DataBank/Temp/Cart';
import qs from 'qs';
import { useNavigation } from '@react-navigation/native';


function totalerPreis(){
  let total=0;
  for (let i=0; i< Cart.length;i++){
    total=total+ Cart[i]['x']  
  }
  return total;
}

async function sendEmail(to, subject, body, options = {}) {
  const { cc, bcc } = options;

  let url = `mailto:${to}`;

  // Create email link query
  const query = qs.stringify({
      subject: subject,
      body: body,
      cc: cc,
      bcc: bcc
  });

  if (query.length) {
      url += `?${query}`;
  }

  // check if we can use this link
  const canOpen = await Linking.canOpenURL(url);

  if (!canOpen) {
      throw new Error('Provided URL can not be handled');
  }

  return Linking.openURL(url);
}

function ReceiptScreen() {
  const [email,setEmail]=useState(''); // string or array of email addresses
  const navigation=useNavigation();

console.log(Cart);
  return (
    // <View style={styles.Container}>
      <KeyboardAvoidingView style={styles.Container} behavior='padding' enabled>
      <View style={styles.Cart}>
        <Text style={styles.Ueberschrift}>Rechnung:</Text>
        <FlatList
          data={Cart}
          renderItem={({ item }) => 
            <View style={styles.ContainerText}>
              <Text style={styles.TextQuantity}>{item.quantity}qm </Text>
              <Text style={styles.TextName}>{item.name} </Text>
              <Text style={styles.TextPrice}> {item.x} €</Text>
            </View>
          }
        />
      <Text style={styles.TextTotal}>Total: {totalerPreis()} €</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="max-mustermann@seine-email.de"
      />

      </View>
      <View style={styles.loeschen}>
        <Button  title={"Löschen"} 
        onPress={() => {
          Cart.splice(0, Cart.length);
          //navigation.navigate("Calculator")
        } 
      }
        color={'black'} />

        <Button  title={"Abschicken"} 
        onPress={() => {
          console.log(email);
          sendEmail(
            {email},
            'Greeting!',
            'Guten Tag, anbei ihre Rechnung: ' + totalerPreis() + ' €'
        ).then(() => {
            console.log('Our email successful provided to device mail ');
        });
        }
        }
        color={'black'}/>
      </View>
     {/* </View> */}
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFECEC',
    justifyContent: 'flex-start'
  },
  Cart: {
    backgroundColor: 'white',
    height: '70%',
    margin: 15,
    borderRadius: 40,

  },
  Ueberschrift: {
    fontWeight: 'bold',
    fontFamily:'HoeflerText-Italic',
    fontSize: 20,
    padding: 20,
    textAlign: 'left',
  },
  ContainerText:{
    paddingBottom:20,
    paddingStart:20,
    paddingEnd:20,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',

  },
  TextQuantity:{
    padding:10,
    textAlign:'left',
    fontWeight:'bold',
  },
  TextName:{
    flex:1,
    padding:10,
    textAlign:'left',
    flexWrap:'wrap',
    },
  TextPrice:{
    padding:10,
    textAlign:'right',
    fontWeight:'bold',
  },
  TextTotal:{
    margin:20,
    marginBottom:'0%',
    fontWeight:'bold',
    padding:10,
    textAlign:'right',

  },
  loeschen: {
    flexDirection:'row',
    alignContent:'space-between',
    justifyContent:'space-evenly',
  },
  input: {
    height: 45,
    margin: 30,
    borderWidth: 1,
    borderRadius:40,
    padding: 10,
  },
});
export default ReceiptScreen