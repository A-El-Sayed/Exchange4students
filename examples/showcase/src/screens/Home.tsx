import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { getCart, getItems } from "../services/firebase"
import { MainStackParamList } from "../types/navigation";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Home">) {
  const { isDarkmode, setTheme } = useTheme();

  const styles = StyleSheet.create({
    listItem: {
      marginHorizontal: 20,
      marginTop: 20,
      padding: 20,
      backgroundColor: isDarkmode ? "#262834" : "white",
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });

  return (
    <Layout>
      {/* Navigation at the top */}
      <TopNav
        //      leftContent={
        //       <Ionicons
        //         name="chevron-back"
        //         size={20}
        //         color={isDarkmode ? themeColor.white : themeColor.black}
        //       />
        //     }
        // leftAction={() => navigation.goBack()}
        middleContent="Welcome to Exchange4Students"
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />

      {/* this is the code for the buttons under the bar at the top*/}
      <ScrollView>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Typography")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Typography</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Colors")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Colors</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("ViewCart")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">View Cart</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity onPress={() => navigation.navigate("Buttons")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Buttons</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Forms")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Forms</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("PostItem")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Post Item</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={async () => {
          await getCart()
        } }>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Test Cart</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={async () => { 
          let products = await getItems();
          navigation.navigate("Section",{products:products})
          }}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Browse Products</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Avatar")}>
          <View style={styles.listItem}>
            <Text fontWeight="medium">Profile</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={isDarkmode ? themeColor.white : themeColor.black}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </Layout>
  );
}
