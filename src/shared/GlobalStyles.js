import { StyleSheet, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
import colors from "./colors";

const SPACING = 20;

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
    height: "100%",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
  },
  header: {
    height: width / 4,
    margin: 0,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingTop: 30,
    padding: 10,
    backgroundColor: colors.lightGrey,
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
    marginBottom: height / 9,
  },

  currentissueContent: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    width: 50,
    height: 50,
    borderRadius: 20,
    // backgroundColor: colors.main,
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
    padding: 10,
    minHeight: 70,
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
    margin: 10,
    borderRadius: 30,
    backgroundColor: "rgba(0, 173, 239, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontFamily: "nunito-extra-bold",
    fontSize: 16,
  },

  tags: {
    marginTop: 10,
    paddingTop: 20,
  },

  // ----------------- Featured articles ----------------- //
  featured: {
    borderWidth: 0.3,
    borderColor: colors.accent,

    padding: SPACING / 4,
    marginBottom: SPACING,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    marginTop: SPACING,
  },
  card: {
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginTop: SPACING,
    elevation: 3,
    margin: SPACING / 2,
  },
  smallCard: {
    padding: SPACING,
    marginBottom: SPACING,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  cardTitle: {
    fontFamily: "nunito-bold",
    fontSize: 20,
    marginBottom: SPACING,
  },

  articleRow: {
    flexDirection: "row",
    padding: SPACING / 8,
    marginBottom: SPACING,
    borderBottomColor: colors.accent,
  },

  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: width / 2 + 60,
  },

  articleTitle: {
    fontSize: 14,
    fontFamily: "nunito-regular",
  },
  featuredTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    textTransform: "uppercase",
    color: colors.main,
    marginBottom: 20,
    marginTop: 20,
  },

  datebox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 65,
    height: 65,
    marginRight: SPACING / 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },

  featuredDate: {
    fontFamily: "nunito-bold",
    textAlign: "center",
    textTransform: "uppercase",
    color: colors.main,
  },

  // ------------ issues page --------------------- //
  iconsContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "35%",
    opacity: 0.6,
  },

  //   - settings
  safeScrollable: {
    marginBottom: height / 10,
    marginTop: 30,
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    backgroundColor: "red",
    borderRadius: 8,
    padding: 10,
  },
});

export default GlobalStyles;
