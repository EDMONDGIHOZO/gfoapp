import { StyleSheet } from "react-native";

const GStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontFamily: "nunito-light",
    fontSize: 24,
  },

  bnavigation: {
    position: "absolute",
    elevation: 0,
    backgroundColor: "#00adef",
    height: 65,
    padding: 15,

    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.36,
    shadowRadius: 3.5,
    elevation: 4,
  },

  tab: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 5,
  },

  tabTitle: {
    color: "white",
    fontSize: 14,
    fontFamily: "nunito-bold",
    textTransform: "capitalize",
  },
});

export default GStyles;
