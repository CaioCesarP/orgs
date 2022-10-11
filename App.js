import React, { useState } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

import RoutesApp from "./src/routes/RoutesApp";
import Splash from "./src/telas/Splash";

export default function App() {
  const [animation, setAnimation] = useState(false);
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!animation || !fonteCarregada) {
      return <Splash setAnimation={setAnimation} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <RoutesApp />
    </SafeAreaView>
  );
}
