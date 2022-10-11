import { StyleSheet, View } from "react-native";
import LoottieView from "lottie-react-native";

export default function Splash({ setAnimation }) {
  return (
    <View style={estilos.view}>
      <LoottieView source={require("../../../assets/splash.json")} autoPlay loop={false} autoSize onAnimationFinish={() => setAnimation(true)} />
    </View>
  );
}

const estilos = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2A9F85",
  },
});
