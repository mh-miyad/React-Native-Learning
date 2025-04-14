import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ImageBackground, Text, View } from "react-native";

function HomeScreen() {
  const [timing, setTiming] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTiming(true);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, []); // Empty dependency array ensures this runs only once

  useEffect(() => {
    if (timing) {
      router.push("/home/home");
    }
  }, [timing]); // Run when `timing` changes

  return (
    <>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1698993001180-8654ab29032a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        className="flex-1 h-full w-full"
        resizeMode="cover"
      >
        <View className="absolute inset-0 bg-black/50" />
        <View className="h-full flex-1 justify-center items-center">
          <Text className="text-white text-5xl uppercase font-extrabold pt-[300px]">
            Welcome To
          </Text>
          <Text className="text-black border-2 border-white/20 text-3xl mt-5 px-6 py-4 rounded-full font-semibold bg-white/70">
            SignLang <Text className="uppercase font-bold">AI</Text>
          </Text>
        </View>
        <View>
          <Text className="text-white text-2xl text-center">
            {!timing ? "Loading..." : ""}
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default HomeScreen;
