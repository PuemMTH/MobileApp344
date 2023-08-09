import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from "react-native";

const MyButton = ({nameButton, textAlert, colorButton, action}) => {
    return (
        <TouchableOpacity
            style={{ ...styles.alertButton, backgroundColor: colorButton }}
            onPress={action}
        >
            <Text style={{ color: '#fff' }}>{nameButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    alertButton: {
        backgroundColor: '#FFB4B4',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginRight: 10
    },
    clearButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 10,
        flex: 1,
        marginLeft: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    input: {
        width: '80%',
        borderWidth: 1,
        backgroundColor: "#fff",
        marginBottom: 20
    },
})

export default MyButton;