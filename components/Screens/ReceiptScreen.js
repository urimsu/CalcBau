import React, { useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Button
} from 'react-native';
import Cart from '../../DataBank/Temp/Cart';

function ReceiptScreen() {
  return (
    <View style={styles.Container}>
      <View style={styles.Cart}>
        <Text style={styles.Text}>Einkaufswagen:</Text>
        <FlatList
          data={Cart}
          renderItem={({ item }) => <Text>{item.name} : {item.x}</Text>}
        />

        <Button title={"delete"} onPress={() => Cart.splice(0, Cart.length)} />

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'darkseagreen',
    justifyContent: 'flex-start'
  },
  Cart: {
    backgroundColor: 'white',
    height: '70%',
    //margin:15,
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30
  },
  Text: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 20,
    textAlign: 'left',
  }
});
export default ReceiptScreen