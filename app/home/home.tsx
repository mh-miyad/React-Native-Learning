import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-white relative">
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl text-red-400">Welcome to Login Page</Text>
        <Link href="/">
          <Text className="text-xl text-blue-600 mt-5">Go To Home Page</Text>
        </Link>
      </View>
    </View>
  );
}
