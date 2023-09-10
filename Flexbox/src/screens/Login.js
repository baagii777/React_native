import React from "react";
import MyButton from "../components/MyButton";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  Button,
} from "react-native";
const Login = ({ navigation }) => {
  const handleChangeText = (text) => {
    console.log(text);
  };
  return (
    <View>
      <Text style={{ textAlign: "center", fontSize: "25", marginVertical: 6 }}>
        Login
      </Text>
      <Image
        source={require("../../assets/nature.jpeg")}
        style={{ width: "100%", height: "50%" }}
      />

      {/* <Image
        source={{
          uri: "https://img.freepik.com/free-photo/transparent-vivid-autumn-leaves_23-2148239689.jpg",
        }}
        style={{ width: "100%", height: 400 }}
      /> */}

      <TextInput
        style={css.inputField}
        placeholder="Type user name"
        onChangeText={handleChangeText}
      />

      <TextInput
        style={css.inputField}
        placeholder="Password"
        onChangeText={handleChangeText}
      />
      <Button title="Back" onPress={() => navigation.pop()} />
    </View>
  );
};

const css = StyleSheet.create({
  inputField: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 15,
    padding: 10,
  },
  button: {
    marginVertical: 5,
  },
});

export default Login;
