import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import { supabase } from "./lib/supabase";
import Carro from "./Carro";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [carros, setCarros] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let { data: Tienda, error } = await supabase.from("Tienda").select("*");
      error == null ? setCarros(Tienda) : console.log(error);
    };

    fetchData();
  }, []);

  return (
    <View>
      {carros && <FlatList data={carros} renderItem={({item}) => <Carro carro={item} />}/>}
    </View>
  );
};

export default Home;
