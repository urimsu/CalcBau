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
import SteinArt from '../SteinArt.js';

const PflasterSteinScreen = () => {
    //console.log(DataSet);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DataSet}
                renderItem={({ item }) =>
                    <SteinArt name={item.Name} preis={item.Preis} onPress={() => console.log("test")} image={item.Bild} />}
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
export default PflasterSteinScreen;