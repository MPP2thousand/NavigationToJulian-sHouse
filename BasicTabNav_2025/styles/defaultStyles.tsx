import { StyleSheet } from "react-native";
import colors from "./colors";

const defaultStyles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: colors.darkbackground,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyText: {
    fontSize: 20,
    color: colors.textondark,
    
  },
  buttons: {
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.primary
  },
});

export default defaultStyles;
