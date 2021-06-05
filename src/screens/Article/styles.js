import { StyleSheet } from "react-native";
import colors from "../../shared/colors";

const Styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 1,
  },

  firsttitle: {
    fontFamily: "nunito-extra-bold",
    fontSize: 25,
    textTransform: "capitalize",
    marginBottom: 20,
    color: colors.accent,
  },

  secondtitle: {
    fontFamily: "nunito-light",
    fontSize: 20,
    textTransform: "capitalize",
    color: colors.accent,
    marginBottom: 20,
  },

  smalltext: {
    fontFamily: "nunito-bold",
    fontSize: 14,
    textTransform: "capitalize",
    color: colors.main,
    maxWidth: "50%",
  },

  abstractcontainer: {
    backgroundColor: colors.main,
    borderLeftColor: colors.secondary,
    borderLeftWidth: 4,
    padding: 20,
    borderRadius: 2,
    elevation: 1,
    marginBottom: 10,
  },

  contentcontainer: {
    flex: 1,
    borderTopColor: colors.main,
    borderTopWidth: 3,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});

export default Styles;
