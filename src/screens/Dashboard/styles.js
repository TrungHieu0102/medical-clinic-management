import { StyleSheet } from "react-native";
import Colors from "../../assets/color/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  banner: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginLeft: 15,
    fontFamily:"bold"
  },  
  button: {
    width: 120,
    height: 50,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:10,
    marginLeft: 10,
  },
  catName: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "regular",
    fontWeight:"400"

  },
  docItem: {
    width: "45%",
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  docImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 20,
  },
  docName: {
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
    fontFamily: "regular"
  },
  docSpl: {
    fontSize: 14,
    marginTop: 5,
    alignSelf: "center",
    color: Colors.primary,
    backgroundColor: "#f2f2f2",
    padding: 5,
    borderRadius: 10,
    fontFamily: "regular"

  },
  status: {
    fontSize: 14,
    marginTop: 5,
    fontFamily: "italic",

    alignSelf: "center",
  },
  bottomView: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    elevation: 5,
    position: "absolute",
    bottom: 20,
    backgroundColor: "#fff",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottomIcon: {
    width: 30,
    height: 30,
  },
  doctorsContainer: {
    flexDirection: 'row',   // Align items in a row
    flexWrap: 'wrap',       // Wrap items to the next row if needed
    justifyContent: 'space-around',  // Distribute items with spacing in the row
  }
});
export default styles;
