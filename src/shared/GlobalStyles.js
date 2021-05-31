import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

const colors = {
  main: "#00adef",
  secondary: "#f46517",
};

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  header: {
    height: width / 4,
    margin: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 40,
    padding: 10,

    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.3,
    // shadowRadius: 1,
    // elevation: 5,
  },

  contents: {
    padding: 10,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: "#fafafa",
  },

  title: {
    fontFamily: "nunito-regular",
    fontSize: 18,
    textTransform: "uppercase",
  },
  headerTitle: {
    fontFamily: "nunito-bold",
    fontSize: 24,
    color: colors.main,
  },

  languageBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    paddingTop: Platform.OS === "ios" ? 20 : 10,
    elevation: 0,
    backgroundColor: "#00adef",
    height: width / 5.3,
    padding: 10,
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
    width: width,
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
    margin: 10,
    borderRadius: 30,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "nunito-bold",
    fontSize: 16,
  },

  tags: {
    marginTop: 10,
    paddingTop: 20,
  },
  featured: {
    flex: 1,
    marginTop: 30,
    backgroundColor: "#F3F7F9",
    padding: 20,
    borderRadius: 15,
    minHeight: 416,
    marginBottom: 80,
    borderWidth: Platform.OS === "ios" ? 0.5 : 0,
    borderColor: "#00adef",
  },
  featuredTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default GlobalStyles;
