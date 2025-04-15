import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 px-5">
      <Text className="text-3xl font-bold">Home Screen</Text>
      <Link href="/about/about" className="mt-5">
        <Text className="text-blue-600 text-lg">Go to About</Text>
      </Link>
      <Link href="/" className="mt-5">
        <Text className="text-blue-600 text-lg">Go To Splash Screen</Text>
      </Link>
    </View>
  );
}
