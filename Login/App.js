import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (text) => {
    setName(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "") {
      Alert.alert("Error", "Please enter your name and email!");
    } else {
      Alert.alert("Your name is " + name + "\nEmail: " + email);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Login</Text>
      </View>
      <TextInput
        style={styles.text_input}
        placeholder="Enter your name"
        // value='handle'
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.text_input}
        placeholder="Enter your email"
        // value='email'
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.button}>
        <Button title="Submit" onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  text_input: {
    width: "100%",
    heigth: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    color: "#000",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    backgroundColor: "aqua",
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 5,
  },
});

export default Form;
