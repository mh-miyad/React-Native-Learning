import React, { useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SIDEBAR_WIDTH = 250;

export default function OffCanvasSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  // Swipe gesture handler
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => {
        return isOpen && gesture.dx < -20;
      },
      onPanResponderMove: (_, gesture) => {
        if (gesture.dx < 0) {
          slideAnim.setValue(Math.max(-SIDEBAR_WIDTH, gesture.dx));
        }
      },
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx < -50) {
          closeSidebar();
        } else {
          openSidebar();
        }
      },
    })
  ).current;

  const openSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(true);
  };

  const closeSidebar = () => {
    Animated.timing(slideAnim, {
      toValue: -SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsOpen(false);
  };

  return (
    <View className="absolute top-0 left-0 w-full h-full z-50">
      {/* Toggle Button */}
      <TouchableOpacity
        onPress={isOpen ? closeSidebar : openSidebar}
        className="p-3 bg-gray-800 w-[80px] items-center"
      >
        <Text className="text-white">{isOpen ? "Close" : "Menu"}</Text>
      </TouchableOpacity>

      {/* Sidebar */}
      <Animated.View
        {...panResponder.panHandlers}
        style={{ transform: [{ translateX: slideAnim }] }}
        className="absolute top-0 left-0 h-full w-[250px] bg-gray-900 p-5"
      >
        <Text className="text-white text-xl mb-4">Sidebar Content</Text>
        <TouchableOpacity onPress={() => alert("Clicked!")}>
          <Text className="text-white">Option 1</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
