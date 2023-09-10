import React from "react";
import { View, Text, Button } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home page</Text>
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Flexbox"
        onPress={() => {
          navigation.navigate("Flexbox");
          navig;
        }}
      />
    </View>
  );
};

export default Home;
