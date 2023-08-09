// Import necessary modules
import React from 'react';
import { View, FlatList, Text, StyleSheet, SectionList } from 'react-native';
// Import your JSON data
import jsonData from '../../assets/student.json';
// Assuming jsonData is imported as follows:
// import jsonData from './data.json';



// Float Section List
const allGrades = jsonData.results.map((item) => {
    return item.grade;
});

const sections = allGrades.map((grades, index) => ({
    title: `Academic Year ${jsonData.results[index].academicYear}`,
    data: grades
}));

// Flat List
const allGradesFlat = jsonData.results.map((item) => item.grade).flat();

const JsonScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={allGradesFlat}
        keyExtractor={(item, index) => item.std_code + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            {/* <Text style={styles.itemText}>{(item.grade.length === 1 ? item.grade + " " : item.grade)} {item.subject_name_en} - {item.grade}</Text> */}
            <Text style={styles.itemText}>
                Subject: {item.subject_name_en}
            </Text>
            <Text style={styles.itemText}>
                Grade: {item.grade}
            </Text>
          </View>
        )}
      />
      
      {/* <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.std_code + index}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.subject_name_en} - {item.grade}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  itemContainer: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default JsonScreen;
