import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
function Home() {
  return (
    <>
      <View className="pt-5">
        <Text className="uppercase text-red-400 text-center text-5xl ">
          Welcome to Login page
        </Text>
        <Link href="/" className="cursor-pointer">
          <Text className="uppercase text-red-400 text-center text-5xl ">
            Goo To Home Page
          </Text>
        </Link>
      </View>
    </>
  );
}

export default Home;
