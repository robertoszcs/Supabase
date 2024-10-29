import Login from "./Login";
import Home from "./Home";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserContext } from "./UserContext";
import { useState } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name={"Login"}
            component={Login}
            options={{ title: "Login" }}
          />
          <Stack.Screen
            name={"Home"}
            component={Home}
            options={{ title: "Home" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}
