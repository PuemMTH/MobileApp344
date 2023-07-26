import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
// import FlatListScore from './components/FlatListScore';
// import SectionListScore from './components/SectionListScore.js';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import AnotherScreen from './src/screens/AnotherScreen';
import HomeScreen from './src/screens/HomeScreen';
import img from './assets/icon.png';

// icon
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={
            {
              headerTitle: 'Home Screen',
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }
          }          
        />
        <Stack.Screen
          name="AnotherScreen"
          component={AnotherScreen}
          options={
            {
              headerTitle: () => (
                  //  image
                  <TouchableOpacity onPress={() => alert("Orange")}>
                      {/* <Image
                        style={{ width: 40, height: 40 }}
                        source={require('./assets/favicon.png')}
                      /> */}
                      <AntDesign name="leftsquare" size={24} color="black" />
                      {/* <AntDesign name="home" size={24} color="black" /> */}
                  </TouchableOpacity>
              ),
              headerRight: () => (
                <Button
                  color={'#f4511e'}
                  title = 'Save'
                  onPress={() => alert('ผู้จัดทำ: ธนภัทร เอี่ยมอาจ')}
                />
              ),
              headerStyle: {
                backgroundColor: '#f45fff',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              }
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}