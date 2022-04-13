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
import { logInWithEmail, getFullName } from "../services/firebase";
import Home from "./Home";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "EnteringScreen">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [RadioToggle, setRadioToggle] = React.useState<boolean>(false);
  // const [photo, setPhoto] = React.useState([]) is for pictures used either for the profile or when posting an item, but thats for another time lol.


  return (
    <Layout>
      <TopNav
        // leftContent={
        //   <Ionicons
        //     name="chevron-back"
        //     size={20}
        //     color={isDarkmode ? themeColor.white : themeColor.black}
        //   />
        // }
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
      <ScrollView>
      <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
          <View style={{ marginBottom: 20}}>
              <Text style={{textAlign:"center",fontSize:30}}>Login</Text>
              <Text style={{ marginBottom: 10 }}>
                Email
              </Text>

              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={(val) => setEmail(val)}
                rightContent={
                  <Ionicons name="mail" size={20} color={themeColor.gray300} />
                }
              />
            </View>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ marginBottom: 10 }}>
                Password:
              </Text>

              <TextInput secureTextEntry = {true}
                placeholder="Enter your password"
                value={pass}
                onChangeText={(val) => setPass(val)}
                rightContent={
                  <Ionicons
                    name="lock-closed"
                    size={20}
                    color={themeColor.gray300}
                  />
                }
              />
            </View>
            <Button
              style={{ marginTop: 10 }}
              text="Continue"
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
                let result = await logInWithEmail(email, pass);
                if (result === 'success') {
                  navigation.navigate("Home");
                }
              } } 
            />
          </SectionContent>
        </Section>
        
        {/* going to Register */}
        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
          <Text style={{textAlign:"center"}}>Don't have an account?</Text>
            <View>
              <View style={{ alignContent: "center" }}>

                <Button
                  style={{ marginTop: 10, marginRight: 10 }}
                  text="Register"
                  status="primary"
                  size="md"
                  outline
                  onPress={() => navigation.navigate("Register")}
                />
              </View>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}