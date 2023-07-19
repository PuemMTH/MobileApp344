import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [text, setText] = useState("")
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                value={text}
                placeholder="Type here..."
            />
            <Button
                onPress={() => {
                    navigation.navigate("AnotherScreen", {
                        // message: "Hello Word!",
                        // data: ["Hello", "World!"]
                        data: text
                    })
                }}
                title='Send Message'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '80%', 
    },
});

export default HomeScreen;