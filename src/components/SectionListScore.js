import React from 'react';
import { SectionList, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

const SectionListDATA = [
    {
        title: 'Group 1',
        data: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
        title: 'Group 2',
        data: ['Item 4', 'Item 5', 'Item 6'],
    },
];

const Item = ({ title }) => (
    <TouchableOpacity
        onPress={() => Alert.alert('You pressed: ' + title)}
    >
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    </TouchableOpacity>
);

export default function App() {
    return (
        <View style={styles.container}>
            <SectionList
                sections={SectionListDATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header}>{title}</Text>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingLeft: 10
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    header: {
        fontSize: 32,
        backgroundColor: "#f0f0f0",
        padding: 10,
    },
    title: {
        fontSize: 24,
    },
});
