import { StyleSheet } from "react-native";
import Colors from "../../assets/color/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    color: "black",
    marginLeft: 10
  },
  inputContainer: {
    height: 55,
    backgroundColor: "#F3F4FB",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  textInput: {
    color: Colors.primary,
    flex: 1,
  },
  dateTextInput: {
    color: Colors.primary,
    flex: 1,
    marginVertical: "25%",
  },
  button: {
    height: 55,
    width: "100%",
    backgroundColor: Colors.primary,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10
  },
  icon: {
    color: Colors.primary,
    fontSize: 22,
    marginRight: 10,
    marginTop: "5%",
  },
});
export default styles;
