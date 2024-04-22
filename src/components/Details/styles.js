import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    paddingVertical:15,
    marginBottom: 25,
    marginVertical:10,
    backgroundColor:"white",
    marginHorizontal: 20,
    borderRadius: 10
    
  },
  userContact:{
    color:"#777777",
    marginLeft: 20,
    fontStyle:"italic"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
    fontStyle:"italic"
  },
  row: {
    flexDirection: "row",
    margin: 5,
    
  },
  menuWrapper: {
    paddingHorizontal: 5,
    paddingVertical:5,
    marginBottom: 25,
    backgroundColor:"white",
    marginHorizontal: 20,
    borderRadius: 10
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  menuItemText: {
    color: "black",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    
  },
  
  sp: {
    width: "100%",
    marginTop: 10,
    height: 1,
    backgroundColor: '#d9d9d9'
  }
});
export default styles;
