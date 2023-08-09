import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.TextStyle}>Home Screen</Text>
            <Button title="Next >>" onPress={() => navigation.navigate("Next")} />
        
            <TouchableOpacity
                style={{ backgroundColor: '#FFB4B4', padding: 10, borderRadius: 10, marginTop: 20 }}
                onPress={() => navigation.navigate("Next")}
            >
                <Text style={{ color: '#fff' }}>Next {'>>'} (TouchableOpacity)</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF7C3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    TextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,   
        textDecorationLine: 'underline',
    }
})