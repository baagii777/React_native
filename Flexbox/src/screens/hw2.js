import { StyleSheet, Text, View } from "react-native";

export default function homework2() {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#52d4ea",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            justifyContent: "center",
          }}
        >
          Header
        </Text>
      </View>
      <View style={{ flex: 7, flexDirection: "row" }}>
        <View style={{ flex: 4 }}>
          <View
            style={{
              flex: 4,
              backgroundColor: "#d9c9e4",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              Hero
            </Text>
          </View>
          <View
            style={{
              flex: 6,
              backgroundColor: "#9fc361",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              Sidebar
            </Text>
          </View>
        </View>
        <View style={{ flex: 6 }}>
          <View
            style={{
              flex: 7,
              backgroundColor: "#f2c956",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              Main Content
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 10,
              }}
            >
              Doloribus qui, vitae, beatae maxime consectetur repudiandae quas
              dolorum ex necessitatibus eaque esse aspernatur cum dolore tempore
              quos.
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              backgroundColor: "#9c9c9c",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 25,
              }}
            >
              Extra Content
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View
          style={{ flex: 7, backgroundColor: "#2bb874", alignItems: "center" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
            }}
          >
            Related Images
          </Text>
        </View>
        <View
          style={{ flex: 3, backgroundColor: "#f2ccdb", alignItems: "center" }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 25,
            }}
          >
            Related Posts
          </Text>
        </View>
      </View>
      <View
        style={{ flex: 1, backgroundColor: "#fea500", alignItems: "center" }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
          }}
        >
          Footer
        </Text>
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
