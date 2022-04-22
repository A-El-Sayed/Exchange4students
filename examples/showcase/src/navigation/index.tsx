import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Buttons from "../screens/Buttons";
import Colors from "../screens/Colors";
import Forms from "../screens/Forms";
import Typography from "../screens/Typography";
import Section from "../screens/Section";
import Avatar from "../screens/Avatar";
import EnteringScreen from "../screens/EnteringScreen";
import Register from "../screens/Register";
import ViewPage from "../screens/ViewPage";
import ViewCart from "../screens/ViewCart";
import PostItem from "../screens/PostItem";
import ViewItem from "../screens/ViewItem";

const MainStack = createStackNavigator();
const Main = () => {
  const linking = {
    prefixes: [
      /* your linking prefixes */
    ],
    config: {
      screens: {
        Home: "home",
        Typography: "typography",
        Buttons: "buttons",
        Colors: "colors",
        Forms: "forms",
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <MainStack.Navigator
        initialRouteName="any"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="EnteringScreen" component={EnteringScreen} />
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="Typography" component={Typography} />
        <MainStack.Screen name="Buttons" component={Buttons} />
        <MainStack.Screen name="Colors" component={Colors} />
        <MainStack.Screen name="Forms" component={Forms} />
        <MainStack.Screen name="Section" component={Section} />
        <MainStack.Screen name="Avatar" component={Avatar} />
        <MainStack.Screen name="ViewPage" component={ViewPage} />
        <MainStack.Screen name="ViewCart" component={ViewCart} />
        <MainStack.Screen name="PostItem" component={PostItem} />
        <MainStack.Screen name="ViewItem" component={ViewItem} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
