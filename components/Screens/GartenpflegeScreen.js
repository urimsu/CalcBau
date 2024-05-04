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
import GartenpflegeArbeit from '../GartenpflegeArbeit.js';
import GartenpflegeArt from '../../DataBank/GartenpflegeArt.js'

const GartenpflegeScreen = () => {
    //console.log(DataSet);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={GartenpflegeArt}
                renderItem={({ item }) =>
                    <GartenpflegeArbeit name={item.Art} onPress={() => console.log(item.Art)} bild={item.Bild}/>}
                keyExtractor={item => item.Id}
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
});
export default GartenpflegeScreen;