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
  Button
} from "react-native-rapi-ui";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { Ionicons } from "@expo/vector-icons";
import Profile from "react-native-rapi-ui/components/Avatar/Avatar";
import ColorCard from "../components/ColorCard";


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
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                justifyContent: "space-evenly",
              }}
            >
              <Text style={{fontSize:25}}>Ali El Sayed</Text>
              <Profile source={require("../../assets/people.jpg")} size="xl" />
            </View>
            <Text style={{marginTop:20 ,marginBottom:10, textAlign:"center", fontSize:13}}>Student at Stevens Institute of Technology</Text>

            <View style={{ flexDirection: "row", alignSelf:"center" }}>
                <Button
                  style={{ marginTop: 10, marginRight: 10 }}
                  text="Edit profile"
                  status="primary"
                  size="md"
                  outline
                  
                />
                <Button
                  style={{ marginTop: 10, marginRight: 10 }}
                  text="Log Out"
                  status="primary"
                  size="md"
                  onPress={() => navigation.navigate("EnteringScreen")}
                />
                
              </View>
          </SectionContent>
        </Section>
        <Section style={{ marginVertical: 20, marginHorizontal: 20 }}>
          
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Recently Bought</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="primary" />
          <ColorCard color="primary100" />
          <ColorCard color="primary200" />
          <ColorCard color="primary300" />
          <ColorCard color="primary400" />
          <ColorCard color="primary500" />
          <ColorCard color="primary600" />
          <ColorCard color="primary700" />
          <ColorCard color="primary800" />
          <ColorCard color="primary900" last />
        </ScrollView>
        </Section>

        <Section style={{ marginVertical: 10, marginHorizontal: 20 }}>
          
          <View style={{ marginHorizontal: 20, marginTop: 20 }}>
          <Text fontWeight="medium">Posted Items</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: "row", paddingLeft: 15 }}
        >
          <ColorCard color="primary" />
          <ColorCard color="primary100" />
          <ColorCard color="primary200" />
          <ColorCard color="primary300" />
          <ColorCard color="primary400" />
          <ColorCard color="primary500" />
          <ColorCard color="primary600" />
          <ColorCard color="primary700" />
          <ColorCard color="primary800" />
          <ColorCard color="primary900" last />
        </ScrollView>
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