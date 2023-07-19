import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import FlatListScore from './components/FlatListScore';
import SectionListScore from './components/SectionListScore.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const AnotherScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Another Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("HomeScreen")
        }}
        title='Navigate to HomeScreen'
      />

    </View>
  )
}

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate("AnotherScreen")
        }}
        title='Check to Another'
      />
    </View>
  )
}

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}