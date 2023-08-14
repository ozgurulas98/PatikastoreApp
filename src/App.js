import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from "react-native";
import patikastore_data from "./patikastore_data.json";
import Products from "./companents/ProductArea/Products";

const App = () => {
  const renderProducts = ({ item }) => <Products prod={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerTitle}>PATİKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..."></TextInput>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={patikastore_data}
        renderItem={renderProducts}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop:50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerTitle: {
    textAlign: "left",
    fontSize: 40,
    color: "#800080",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  input: {
    backgroundColor: "#eceff1",
    padding: 15,
    borderRadius: 25,
    fontSize: 20,
    marginTop: 15,
  },
});
export default App;
