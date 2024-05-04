
import React from 'react'
import { 
  Text, 
  View, 
  StyleSheet,
  Image
} from 'react-native';


const SteinInformationDisplay = ({ name,preis,SteinBild }) => (
    <View style={styles.item}>
      <Image style={styles.bild} source={SteinBild} />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.preisText}> {preis}€/qm</Text>
    </View >
  );

function SteinInfoScreen({ route }) {
    const { SteinName, SteinPreis, SteinBild } = route.params;
    return (
        <View style={styles.Container}>
        <SteinInformationDisplay 
        name={SteinName}
        preis={SteinPreis}
        SteinBild={SteinBild}
        />
        </View>
    );
  }
const styles=StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor:'darkseagreen',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  nameText:{
    fontWeight:'bold',
    fontSize:30,
    textAlign:'center',
  },
  bild:{
    height:200,
    width:200,
    borderRadius:40,
    alignSelf:'center'
  },
  preisText:{
    textAlign:'center',
    fontSize:20,
  }
});


  export default SteinInfoScreen;