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
import { getFullName, signUpWithEmail } from '../services/firebase';
import Home from "./Home";

export default function ({
  navigation,
}: StackScreenProps<MainStackParamList, "Register">) {
  const { isDarkmode, setTheme } = useTheme();
  const [text, setText] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [value, setValue] = React.useState<string | null>(null);
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [RadioToggle, setRadioToggle] = React.useState<boolean>(false);


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
              <Text style={{fontSize:30,textAlign:"center"}}>Register</Text>
              <Text style={{ marginBottom: 10 }}>
                Full Name
              </Text>

              <TextInput
                placeholder="Enter your full name"
                value={text}
                onChangeText={(val) => setText(val)}
                rightContent={
                  <Ionicons name="text" size={20} color={themeColor.gray300} />
                }
              />
            </View>
          <View style={{ marginBottom: 20}}>
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
              onPress ={async () => {
                let result = await signUpWithEmail(text, email, pass);
                if (result === 'success') {
                  let fullName = await getFullName();
                  navigation.navigate("Home");
                }
              }}
            />
          </SectionContent>
        </Section>

        <Section style={{ marginHorizontal: 20, marginTop: 20 }}>
          <SectionContent>
          <Text style={{textAlign:"center"}}>Already have an account?</Text>
            <View>
              <View style={{ alignContent: "center" }}>

                <Button
                  style={{ marginTop: 10, marginRight: 10 }}
                  text="Login"
                  status="primary"
                  size="md"
                  outline
                  onPress={() => navigation.navigate("EnteringScreen")}
                />
              </View>
            </View>
          </SectionContent>
        </Section>
      </ScrollView>
    </Layout>
  );
}