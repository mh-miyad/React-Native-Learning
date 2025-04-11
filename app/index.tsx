import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
function HomeScreen() {
  return (
    <>
      <View className="pt-5">
        <Text className="uppercase text-red-400 text-center text-5xl ">
          This sis Index pages
        </Text>
        <Link
          href="/home/home"
          className="cursor-pointer my-10 py-4 bg-white border w-1/2 mx-auto rounded-full group"
        >
          <Text className="uppercase text-red-400 text-center text-2xl group-hover:text-black">
            hello world
          </Text>
        </Link>
      </View>
    </>
  );
}

export default HomeScreen;
