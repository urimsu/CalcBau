import React, { useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {KantensteinDaten} from '../../DataBank/GartenBauArtDaten.js'
import SteinArt from '../SteinArt.js';
import { useNavigation } from '@react-navigation/native';



const PflasterSteinScreen = () => {
    const navigation=useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={KantensteinDaten}
                renderItem={({ item }) =>
                    <SteinArt
                        name={item.Name}
                        preis={item.Preis}
                        onPress={() => navigation.navigate("Stein Information",
                            {
                                SteinName:item.Name,
                                SteinPreis:item.Preis,
                                SteinBild:item.Bild,
                            }
                        )} 
                        image={item.Bild} />}
                keyExtractor={item => item.Id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#FFECEC',
    },
    einkaufswagen:{
        marginBottom:100,
    },
});
export default PflasterSteinScreen;