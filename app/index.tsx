import React from "react";
import { ImageBackground, Text, View } from "react-native";
function HomeScreen() {
  return (
    <>
      <ImageBackground
        src="https://images.unsplash.com/photo-1698993001180-8654ab29032a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="flex-1 h-full w-full "
        resizeMode="cover"
      >
        <View className={"absolute inset-0 bg-black/50"} />
        <View className=" h-full flex-1  justify-center items-center">
          <Text className="text-white text-5xl pt-[400px]">Home Screen</Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default HomeScreen;
