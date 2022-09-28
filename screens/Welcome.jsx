import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../styles/Welcomestyle";
import Block from '../components/Block';

export default function Welcomescreen({ navigation }) {
  return (
    <Block>
      <Block >
        <Text >LOGO</Text>
      </Block>
      <TouchableOpacity
        onPress={() => navigation.navigate("Onboarding")}
      >
        <Text>Continue</Text>
      </TouchableOpacity>
    </Block>
  );
}
