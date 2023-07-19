import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListScore from './components/FlatListScore';
import SectionListScore from './components/SectionListScore.js';

export default function App() {
  return (
    // <FlatListScore />
    <SectionListScore />
  );
}