import React from "react";
import { Redirect } from "expo-router";

export default function App() {
  return (
    <Redirect href={"/ui/screens/userWelcome/Welcome"} />
  );
}