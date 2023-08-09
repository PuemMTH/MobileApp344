import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

const NextScreen = () => {
    const [text, setText] = useState("");

    const onPress = () => {
        if (text.length > 0) {
            alert(text);
        } else {
            alert("Please type something!");
        }
    }

    const clearInput = () => {
        setText("");
    }

    return (
        <View style={styles.container}>
            <MyInput 
                placeholder={"Type something..."}
                text={text}
                setText={setText}
            />
            <View style={styles.row}>
                {/* Component */}
                <MyButton
                    nameButton={"Alert"}
                    textAlert={"Hello World!"}
                    colorButton={"#FFB4B4"}
                    action={onPress}
                />

                <MyButton
                    nameButton={"Clear"}
                    textAlert={"Clear"}
                    colorButton={"#000"}
                    action={clearInput}
                />

            </View>
        </View>
    )
}

export default NextScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDEB4",
        alignItems: 'center',
        justifyContent: 'center',
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
});
