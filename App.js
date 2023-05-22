import * as React from "react";
import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import Wellcome from "./components/Wellcome";
import MenuItems from "./components/MenuItems";
import LoginScreen from "./components/LoginScreen";
export default function App() {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <LoginScreen /> */}
        {!showMenu && <LoginScreen />}
        <Pressable
          style={menuStyles.button}
          onPress={() => {
            setShowMenu(!showMenu);
          }}
        >
          <Text style={menuStyles.buttonText}>
            {showMenu ? "Home" : "View Menu"}
          </Text>
        </Pressable>
        {showMenu && <MenuItems />}
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  footerContainer: { backgroundColor: "#33333" },
});

const menuStyles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "red",
    color: "black",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
