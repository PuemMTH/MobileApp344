import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./src/screens/HomeScreen";
import NextScreen from "./src/screens/NextScreen"
import AlertScreen from "./src/screens/AlertScreen"
import JsonScreen from "./src/screens/JsonScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Next" component={NextScreen} />
            <Stack.Screen name="Alert" component={AlertScreen} />
            <Stack.Screen name="Json" component={JsonScreen} />
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={styles.NavigattorStyle}
            >
                <Tab.Screen
                    name="HomeTab"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <SimpleLineIcons name="home" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen
                    name="JsonTab"
                    component={JsonScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="page-next-outline" size={24} color="black" />
                        ),
                    }} />

                <Tab.Screen
                    name="AlertTab"
                    component={AlertScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
                        ),
                        tabBarBadge: 999,
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    NavigattorStyle: {
        tabBarStyle: {
            backgroundColor: "#FFDEB4",
        },
        tabBarActiveTintColor: "#000",
        headerStyle: {
            backgroundColor: "#FFB4B4",
        },
        headerTintColor: "#fff",
        headerShown: false,
    }
});

export default App;