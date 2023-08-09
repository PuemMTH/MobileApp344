import { View, Text, StyleSheet } from 'react-native'

const NextScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Next Screen</Text>
        </View>
    )
}

export default NextScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFDEB4",
        alignItems: 'center',
        justifyContent: 'center',
    }
})