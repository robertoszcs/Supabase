import { View, Text, Image, SafeAreaView } from "react-native";
import React from "react";

const Carro = ({ carro }) => {
  return (
    <SafeAreaView style={{ alignItems: "center", margin: 10 }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 5,
          alignItems: "center",
          width: 350,
        }}
      >
        <Image
          source={{ uri: carro.imagen }}
          style={{
            width: 350,
            height: 350,
          }}
        />
        <Text>
          {carro.marca} {carro.vehiculo} - {carro.year}
        </Text>
        <Text>$ {carro.precio}</Text>
        <Text>{carro.Km} Kms</Text>
      </View>
    </SafeAreaView>
  );
};

export default Carro;
