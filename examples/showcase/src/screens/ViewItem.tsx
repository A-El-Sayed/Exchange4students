import React from "react";
import { ScrollView, View } from "react-native";
import {
  Layout,
  TopNav,
  Text,
  TextInput,
  Picker,
  CheckBox,
  RadioButton,
  themeColor,
  SectionContent,
  Section,
  useTheme,
  Button
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { addProduct } from "../services/firebase";

export default function ({
  navigation, route
}: StackScreenProps<MainStackParamList, "ViewItem">) {
  const { isDarkmode, setTheme } = useTheme();
  const { item } = route.params;


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
        middleContent="View Item"
      />
      <ScrollView>
      <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
          <View style={{ marginBottom: 20}}>
              <Text style={{ marginBottom: 10 }}>
                Name of Item: {item.item_Name}
              </Text>
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Category: {item.Category}
              </Text>

            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Description: {item.Description}
              </Text>

            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Price: ${item.Price}
              </Text>

            </View>
        </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}