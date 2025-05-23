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
import { useNavigation } from '@react-navigation/native';
import GartenBauDaten from '../../DataBank/GartenBauDaten.js'

const ShowArt = ({ name, onPress, bild }) => (
    <TouchableOpacity style={styles.item} onPress={onPress} >
        <Image style={styles.tinyLogo} source={bild} />
        <Text style={styles.nameText}>{name}</Text>
    </TouchableOpacity >
);



const CalculatorScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={GartenBauDaten}
                renderItem=
                {({ item }) => <ShowArt name={item.Name}
                    onPress={() => {
                        if (item.Name == "Pflastersteine") {
                            navigation.navigate("Pflaster Steine")
                        }else if(item.Name == "Kantensteine"){
                            navigation.navigate("Kantensteine")
                        }else if(item.Name=="Zaunbau"){
                            navigation.navigate("Zaunbau")
                        }
                    }}
                    bild={item.Bild}
                />}
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
    item: {
        flex: 1,
        flexDirection: 'row',
        padding: 40,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        width: 70,
        height: 70,
        marginRight: 25,
        borderRadius: 20,

    },
    nameText: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 20
    },
    preisText: {

        marginLeft: 10,
    }
});

export default CalculatorScreen;