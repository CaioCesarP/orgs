import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cesta from "../telas/Cesta";
import mock from "../mocks/cesta";

const Stack = createNativeStackNavigator();

const RoutesApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cesta">
        <Stack.Screen name="Cesta" options={{ headerShown: false }}>
          {() => <Cesta {...mock} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RoutesApp;
