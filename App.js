import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title="Next >>" onPress={() => navigation.navigate("Next")} />
        </View>
    );
};



const NextScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Next Screen</Text>
        </View>
    )
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Next" component={NextScreen} />
        </Stack.Navigator>
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: "#FFDEB4",
                    },
                    tabBarActiveTintColor: "#000",
                    headerStyle: {
                        backgroundColor: "#FFB4B4",
                    },
                    headerTintColor: "#fff",
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <SimpleLineIcons name="home" size={24} color="black" />
                        ),
                    }} />
                <Tab.Screen
                    name="Next"
                    component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="page-next-outline" size={24} color="black" />
                        ),
                        tabBarBadge: 999,
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDF7C3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default App;
