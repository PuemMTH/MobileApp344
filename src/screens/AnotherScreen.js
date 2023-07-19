import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const AnotherScreen = ({ route, navigation }) => {
    // const {message, data} = route.params;
    const {data} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Another Screen</Text>
            <Text style={styles.text}>{data}</Text>

            <Button
                onPress={() => {
                    navigation.goBack()
                }}
                title="Check to Another"
            />
        </View>
    );
};

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
});

export default AnotherScreen;
