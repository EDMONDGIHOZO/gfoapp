import { Platform, StyleSheet } from "react-native";

const SPACING = 15;
const RADIUS = 12;

const Styles = StyleSheet.create({
  container: {
    height: 180,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    width: "100%",
    padding: 25,
    shadowColor: "#dadbdb",
    shadowOffset: { width: 1, height: 1.5 },
    shadowOpacity: 0.5,
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

  articleContainer: {
    marginBottom: SPACING / 4,
    padding: SPACING / 2,
    borderRadius: RADIUS,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    shadowColor: "#00adef",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 2,
    marginTop: SPACING,
  },

  article: {
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: SPACING / 2,
    maxWidth: "70%",
  },

  date: {
    fontFamily: "nunito-bold",
    opacity: 0.9,
    textTransform: "uppercase",
  },
});

export default Styles;
