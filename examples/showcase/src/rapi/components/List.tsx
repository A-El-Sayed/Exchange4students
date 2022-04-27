import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";


const { products } = route.params;

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

// the filter
const List = (products) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (products.searchPhrase === "") {
      return <Item name={item.name} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(products.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name}  />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
        <FlatList
          data={products}
          renderItem={ item }
          keyExtractor={(item) => item.name}
        />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});