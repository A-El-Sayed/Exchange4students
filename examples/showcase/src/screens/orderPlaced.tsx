import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "orderPlace">) {
  const { isDarkmode, setTheme } = useTheme();
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
        middleContent="Order Placed"
        // rightContent={
        //   <Ionicons
        //     name="cart"
        //     size={20}
        //     color={isDarkmode ? themeColor.white100 : themeColor.dark}
        //   />
        // }
        // rightAction={() => {
        // }}
      />
      <ScrollView>
        <Section >
          <SectionImage source={require("../../assets/checkmark.jpg")} />
          <SectionContent>
  
          <Text> </Text>
          <Text fontWeight="medium" >Thank you for placing your order! You should recieve a confirmation email shortly.</Text>
 
          </SectionContent>
        </Section>


    
      </ScrollView>
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
