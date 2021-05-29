import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

const colors = {
  main: "#00adef",
  secondary: "#f46517",
};

const AndroidStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "#00adef" : "#fff",
  },

  header: {
    height: width / 5,
    margin: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
  },

  contents: {
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },

  title: {
    fontFamily: "nunito-light",
    fontSize: 24,
  },
  headerTitle: {
    fontFamily: "nunito-bold",
    fontSize: 24,
    color: colors.main,
  },

  languageBox: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: "#f46517",
    textAlign: "center",
    justifyContent: "center",
    opacity: 1,
    alignItems: "center",
  },

  lang: {
    fontFamily: "nunito-bold",
    color: "white",
  },

  bnavigation: {
    position: "absolute",
    elevation: 0,
    backgroundColor: "#00adef",
    height: width / 5,
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

  // --------- searchbar Component ------------//
  searchContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    padding: 24,
  },
  input: {
    height: width / 8,
    borderWidth: 1,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    padding: 10,
    borderColor: colors.secondary,
    fontFamily: "nunito-regular",
    backgroundColor: "#fff",
  },
  button: {
    padding: 15,
    backgroundColor: "black",
    height: width / 8,

    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "nunito-bold",
    fontSize: 16,
  },
});

export default AndroidStyle;
