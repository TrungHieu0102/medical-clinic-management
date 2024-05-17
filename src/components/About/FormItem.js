import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../assets/color/Colors";

const FormItem = ({ label, value, onChangeText, placeholder, iconName,secureTextEntry  }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
      <Icon name={iconName} style={styles.icon} />
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    
    height: 55,
    backgroundColor: "#F3F4FB",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Colors.primary,
  },
  label: {
    marginVertical: 5,
    fontSize: 15,
    marginRight: 20,
    color: "black",
    marginLeft: 10,
  },
  textInput: {
    color: Colors.primary,
    flex: 1,
  },
  
  icon: {
    color: Colors.primary,
    fontSize: 22,
    marginRight: 10,
    marginTop: "5%",
  },
});

export default FormItem;
