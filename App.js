import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

console.log("Status Bar height", StatusBar.currentHeight);
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: "green",

    padding: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    borderColor: "black",
    borderWidth: 1,
    padding: 16,
  },
  text: {
    textShadowColor: "black",
  },
});
