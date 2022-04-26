import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
  SectionImage,
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
         <Text fontWeight = 'medium' style={styles.label}>{item.item_Name}</Text>
         <SectionImage source={require("../../assets/blue.jpg")} />
         <SectionContent>
            <View /*style={{ marginBottom: 20 }}*/>
              <Text style={styles.item}>
                  Category: {item.Category}
              </Text>

            </View>
            <View /*style={{ marginBottom: 20 }}*/>
              <Text style={styles.item}>
                  Description: {item.Description}
              </Text>

            </View>
            <View /*style={{ marginBottom: 20 }}*/>
              <Text style={styles.item}>
                  Price: ${item.Price}
              </Text>

            </View>
        </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}

const styles =StyleSheet.create({
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
    label: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 20,
        marginTop: 20,
    },
    item: {
        marginBottom: 20,
        marginTop: 20,
    }
});