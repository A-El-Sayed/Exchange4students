import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Layout,
  Section,
  SectionContent,
  Text,
  themeColor,
  TopNav,
  useTheme,
} from "react-native-rapi-ui";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import Profile from "react-native-rapi-ui/components/Avatar/Avatar";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Avatar">) {
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
        middleContent="Profile"
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
      <ScrollView>
        <Section style={{ marginTop: 20, marginHorizontal: 20 }}>
          <SectionContent>
            <Text fontWeight="medium">Sizes</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Extra large xl</Text>
              <Profile source={require("../../assets/people.jpg")} size="xl" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text size="lg">Large lg</Text>
              <Profile source={require("../../assets/people.jpg")} size="lg" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Medium md</Text>
              <Profile source={require("../../assets/people.jpg")} size="md" />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-between",
              }}
            >
              <Text>Small sm</Text>
              <Profile source={require("../../assets/people.jpg")} size="sm" />
            </View>
          </SectionContent>
        </Section>
        <Section style={{ marginVertical: 20, marginHorizontal: 20 }}>
          <SectionContent>
            
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
