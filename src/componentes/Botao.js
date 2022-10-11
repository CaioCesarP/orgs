import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from "./Texto";

const Botao = ({ children, styleButton, styleText, onPress }) => {
  return (
    <TouchableOpacity style={{ ...estilos.botao, ...styleButton }} onPress={onPress}>
      <Texto style={{ ...estilos.texto, ...styleText }}>{children}</Texto>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  texto: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});

export default Botao;
