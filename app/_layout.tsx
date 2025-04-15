import "@/global.css";
import { Slot } from "expo-router";
import React from "react";
function Layout() {
  return (
    <>
      <Slot />
    </>
  );
}

export default Layout;
