import "@/global.css";
import { Slot } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
function Layout() {
  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <Slot />
    </SafeAreaView>
  );
}

export default Layout;
