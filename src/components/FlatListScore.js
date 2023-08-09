import React from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
        marginLeft: 8,
        color: '#333',
        fontFamily: 'Roboto',
    },
});


const data = [
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
    { id: '6', name: 'Item 6' },
    { id: '7', name: 'Item 7' },
    { id: '8', name: 'Item 8' },
    { id: '9', name: 'Item 9' },
    { id: '10', name: 'Item 10' },
    { id: '11', name: 'Item 11' },
    { id: '12', name: 'Item 12' },
    { id: '13', name: 'Item 13' },
    { id: '14', name: 'Item 14' },
    { id: '15', name: 'Item 15' },
    { id: '19', name: 'Item 19' },
    { id: '20', name: 'Item 20' },
    { id: '21', name: 'Item 21' },
    { id: '22', name: 'Item 22' },
    { id: '23', name: 'Item 23' },
    { id: '24', name: 'Item 24' },
    { id: '25', name: 'Item 25' },
    { id: '26', name: 'Item 26' },
    { id: '27', name: 'Item 27' },
    { id: '28', name: 'Item 28' },
    { id: '29', name: 'Item 29' },
    { id: '30', name: 'Item 30' },
    { id: '31', name: 'Item 31' },
    { id: '32', name: 'Item 32' },
    { id: '33', name: 'Item 33' },

];

const App = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity 
            onPress={() => onPress(item.name)}
        >
            <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    const onPress = (itemShow) => {
        Alert.alert('Alert', itemShow, [{ text: 'OK' }]);
    }

    return (
        <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    // keyExtractor={(item) => item.id}
                />
        </View>
    );
};

export default App;
