import { Platform, StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    width: 360,
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "100%",
    padding: 25,
    shadowColor: "#dadbdb",
    shadowOffset: { width: 1, height: 1.5 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1,
  },
  title: {
    fontFamily: "nunito-regular",
    color: "#00adef",
    fontSize: 16,
    textTransform: "uppercase",
    opacity: 2,
  },

  issueNumber: {
    fontFamily: "nunito-extra-bold",
    textAlign: "center",
    fontSize: 35,
    marginTop: 15,
    marginBottom: 15,
    color: "#f46517",
  },

  infoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  infoText: {
    fontFamily: "nunito-bold",
    fontSize: 15,
  },
});

export default Styles;
