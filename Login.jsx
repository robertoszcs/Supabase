import { Image, StyleSheet, TextInput, SafeAreaView, Button } from "react-native";
import { Alert } from "react-native";

import { supabase } from "./lib/supabase";
import { useContext, useState } from "react";
import {UserContext} from "./UserContext";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const {user, setUser} = useContext(UserContext);

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    setUser(data.session.user);

    if (error) Alert.alert(error.message);

    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Image
        source={require("./Images/logo.jpg")}
        style={{ width: 300, height: 300 }}
      />
      <SafeAreaView>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
        />
      </SafeAreaView>
      <Button title="Sign In" onPress={signInWithEmail} />
    </SafeAreaView>
  );
}
