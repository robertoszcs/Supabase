import { Image, StyleSheet, Text, TextInput, View, Button } from "react-native";
import { Alert } from "react-native";

import { supabase } from "./lib/supabase";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signInWithEmail() {
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(email, password)

    if (error) Alert.alert(error.message);
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("./Images/logo.jpg")}
        style={{ width: 300, height: 300 }}
      />
      <View>
        <TextInput placeholder="Email" onChangeText={email => setEmail(email)} />
        <TextInput placeholder="Password" onChangeText={password => setPassword(password)} />
      </View>
      <Button title="Sign In" onPress={signInWithEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
