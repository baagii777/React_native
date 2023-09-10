import { StyleSheet, Text, View } from "react-native";

export default function homework1() {
  return (
    <View style={{ flex: 1, backgroundColor: "#c3ddc2", flexDirection: "row" }}>
      <View
        style={{
          flex: "80%",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            width: "95%",
            height: "49%",
            backgroundColor: "#7d8474",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              // flex: 1,
              backgroundColor: "#fff156",
              width: "20%",
              height: "20%",
            }}
          ></View>
        </View>
        <View
          style={{
            width: "95%",
            height: "49%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{ width: "24%", height: "98%", backgroundColor: "#899b5f" }}
          ></View>
          <View
            style={{ width: "24%", height: "98%", backgroundColor: "#899b5f" }}
          ></View>
          <View
            style={{ width: "24%", height: "98%", backgroundColor: "#899b5f" }}
          ></View>
          <View
            style={{ width: "24%", height: "98%", backgroundColor: "#899b5f" }}
          ></View>
        </View>
      </View>
      <View
        style={{
          flex: "20%",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            backgroundColor: "#cf8175",
            height: "32%",
            justifyContent: "space-around",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#cf8175",
            height: "32%",
            justifyContent: "space-around",
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#cf8175",
            height: "32%",
            justifyContent: "space-around",
          }}
        ></View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "green",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
