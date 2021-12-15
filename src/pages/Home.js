import React from "react";
import { StyleSheet, Text } from "react-native";

export default () => {
  return (
    <Text 
      testID="Home.welcomeMsg"
      style={styles.headerText}>
        Welcome Back!
    </Text>
      );
  };

  const styles = StyleSheet.create({
    headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    textAlign:"center"
    },
  });