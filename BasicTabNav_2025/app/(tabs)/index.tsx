import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "@/styles/colors";
import defaultStyles from "@/styles/defaultStyles";
import Homepage from "@/components/Homepage";

export default function HomeScreen() {
  return (
    <View style={defaultStyles.pageContainer}>
      <Text style={defaultStyles.bodyText}>Best Home Page</Text>
      <Homepage/>
    </View>
  );
}
