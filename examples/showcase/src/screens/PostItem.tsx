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
import { StackScreenProps } from "@react-navigation/stack";
import { MainStackParamList } from "../types/navigation";
import { addProduct } from "../services/firebase";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "PostItem">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [RadioToggle, setRadioToggle] = React.useState<boolean>(false);
  const [itemName,setName] = React.useState<string>("")
  const [Price,setPrice] = React.useState<string>("")
  const [Category,setCategory] = React.useState<string>("")
  const [Description, setDescription] = React.useState<string>("");
  // const [photo, setPhoto] = React.useState([]) is for pictures used either for the profile or when posting an item, but thats for another time lol.


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
        middleContent="Post Item"
      />
      <ScrollView>
      <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
          <View style={{ marginBottom: 20}}>
              <Text style={{ marginBottom: 10 }}>
                Name of Item
              </Text>

              <TextInput
                placeholder="Enter the name of the item"
                value={itemName}
                onChangeText={(val) => setName(val)}
                rightContent={
                  <Ionicons name="text" size={20} color={themeColor.gray300} />
                }
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Category:
              </Text>

              <TextInput
                placeholder="Enter the category of the item"
                value={Category}
                onChangeText={(val) => setCategory(val)}
                rightContent={
                  <Ionicons
                    name="text"
                    size={20}
                    color={themeColor.gray300}
                  />
                }
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Description:
              </Text>

              <TextInput
                placeholder="Enter the description of the item"
                value={Description}
                onChangeText={(val) => setDescription(val)}
                rightContent={
                  <Ionicons
                    name="text"
                    size={20}
                    color={themeColor.gray300}
                  />
                }
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                  Price:
              </Text>

              <TextInput
                placeholder="Enter the price"
                value={Price}
                onChangeText={(val) => setPrice(val)}
                rightContent={
                  <Ionicons
                    name="calculator"
                    size={20}
                    color={themeColor.gray300}
                  />
                }
              />
            </View>
            <Button
              style={{ marginTop: 10 }}
              text="Post"
              rightContent={
                <Ionicons
                  name="arrow-forward"
                  size={20}
                  color={themeColor.white}
                />
                
              }
              status="primary"
              type="TouchableOpacity"
              // onPress={() => navigation.navigate("Home")}
              onPressIn={async () => {
                let result = await addProduct(itemName, Category,Description,Price);
                if (result === 'success') {
                  navigation.navigate("Home");
                  
              } } 
            }
            />
          </SectionContent>
        </Section>
        
      </ScrollView>
    </Layout>
  );
}