import { Platform, StyleSheet } from "react-native";

const SPACING = 15;
const RADIUS = 12;

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    width: "100%",
    padding: 25,
    shadowColor: "#dadbdb",
    shadowOffset: { width: 1, height: 1.5 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
    marginTop: 20,
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
    fontSize: 25,
    marginTop: 1,
    marginBottom: 15,
    color: "#fff",
    textTransform: "uppercase",
  },

  infoContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,

    width: "100%",
  },

  infoText: {
    fontFamily: "nunito-bold",
    fontSize: 15,
    textTransform: "capitalize",
    color: "#fff",
  },

  articleContainer: {
    marginBottom: SPACING / 4,
    padding: SPACING / 2,
    borderRadius: RADIUS,
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginTop: SPACING,
  },

  article: {
    justifyContent: "space-between",
    flexDirection: "column",
    marginBottom: SPACING / 2,
    maxWidth: "60%",
  },

  date: {
    fontFamily: "nunito-bold",
    opacity: 0.9,
    textTransform: "uppercase",
  },

  loader: {
    marginTop: 20,
    alignItems: "center",
  },

  filter: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  pickerContainer: {
    borderLeftWidth: 1,
    borderLeftColor: "#F46517",
    width: "40%",
    paddingLeft: 10,
    minHeight: 60,
  },
});

export default Styles;
