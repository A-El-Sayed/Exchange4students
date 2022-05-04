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
}: StackScreenProps<MainStackParamList, "ViewCart">) {
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
        leftAction={() => navigation.goBack()}
        middleContent="Cart"
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
      

        <Button
                  style={{ marginTop: 20, marginRight: 10 }}
                  text="Check  Out"
                  status="primary"
                  size="md"
                  outline
                  onPress={() => {
                    navigation.navigate("Checkout")
                  }}
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
