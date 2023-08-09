import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from "react-native";

const MyInput = ({
    text,
    setText
}) => {
    return (
        <>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                keyboardType="default"
                multiline
                numberOfLines={5}
                textAlignVertical="top"
                placeholder="Type here..."
            />
        </>
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

export default MyInput;