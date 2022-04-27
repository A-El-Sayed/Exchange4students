import React from "react";
import { ScrollView, StyleSheet, View, FlatList } from "react-native";
import {
  Button,
  Layout,
  Section,
  SectionContent,
  SectionImage,
  Text,
  themeColor,
  TopNav,
  useTheme,
} from "react-native-rapi-ui";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { ScaleFromCenterAndroid } from "@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets";
import { getItems } from "../services/firebase";
import { Search } from "../rapi/components/searchBar";

export default function ({
  navigation, route
}: StackScreenProps<MainStackParamList, "Section">) {
  const { isDarkmode, setTheme } = useTheme();
  const { products } = route.params;

  return (
    <Layout>
      <TopNav
        leftContent={
          <Ionicons
           name="chevron-back"
           size={20}
           color={isDarkmode ? themeColor.white : themeColor.black}
          />
        }
        leftAction={() => navigation.navigate("Home")}

       /* middleContent="Browse"

       middleContent={
         <Searchbar
         placeholder="Search"
         onChangeText={onChangeSearch}
         value = {searchQuery}
         />
       }*/

       middleContent={
         <Search />
         }

  
        rightContent={
          <Ionicons
            name="cart"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => navigation.navigate("ViewCart")
        }

        // rightContent={
        //   <Ionicons
        //     name={isDarkmode ? "sunny" : "moon"}
        //     size={20}
        //     color={isDarkmode ? themeColor.white100 : themeColor.dark}
        //   />
        // }
        // rightAction={() => {
        //   if (isDarkmode) {
        //     setTheme("light");
        //   } else {
        //     setTheme("dark");
        //   }
        // }}
      />
     /* {/* <ScrollView>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionImage source={require("../../assets/blue.jpg")} />
          <SectionContent>
          <Text fontWeight="medium">Data Structures and Algorithm</Text>
          <Text> </Text>
          <Text fontWeight="medium" >$15.99</Text>
          <View style={{ flexDirection: "row" }}>
                <Button
                  style={{ marginTop: 20, marginRight: 10 }}
                  text="Click to learn more"
                  status="primary"
                  size="md"
                  outline
                  onPress={() => {
                    console.log(products);
                  }}
                />
                
              </View>
          </SectionContent>
        </Section>

        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionImage source={require("../../assets/blue.jpg")} />
          <SectionContent>
          <Text fontWeight="medium">Data Structures and Algorithm</Text>
          <Text> </Text>
          <Text fontWeight="medium" >$15.99</Text>
          <View style={{ flexDirection: "row" }}>
                <Button
                  style={{ marginTop: 20, marginRight: 10 }}
                  text="Click to learn more"
                  status="primary"
                  size="md"
                  outline
                />
                
              </View>
          </SectionContent>
        </Section>
      </ScrollView> */}
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionImage source={require("../../assets/blue.jpg")} />
          <SectionContent>
          <Text fontWeight="medium">{item.item_Name}</Text>
          <Text> </Text>
          <Text fontWeight="medium" >${item.Price}</Text>
          <View style={{ flexDirection: "row" }}>
                <Button
                  style={{ marginTop: 20, marginRight: 10 }}
                  text="Click to learn more"
                  status="primary"
                  size="md"
                  outline
                  onPress={() => {
                    navigation.navigate("ViewItem",{item:item})
                  }}
                />
                
              </View>
          </SectionContent>
        </Section>
        )}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  listItem: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});