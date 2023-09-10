import React from "react";
import { View, Text } from "react-native";

const Flexbox = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "aqua",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "blue", flex: 4 }}></View>
        <View style={{ backgroundColor: "red", flex: 3 }}></View>
        <View style={{ backgroundColor: "green", flex: 5 }}>
          <View
            style={{
              backgroundColor: "aqua",
              flex: 2,
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "stretch",
            }}
          >
            <View style={{ backgroundColor: "aqua", flex: 6 }}></View>
            <View style={{ backgroundColor: "red", flex: 4 }}></View>
            <View style={{ backgroundColor: "green", flex: 2 }}></View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "aqua",
          flex: 2,
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "stretch",
        }}
      >
        <View style={{ backgroundColor: "aqua", flex: 6 }}></View>
        <View style={{ backgroundColor: "red", flex: 4 }}></View>
        <View style={{ backgroundColor: "green", flex: 2 }}></View>
      </View>
    </View>
  );
};

export default Flexbox;
