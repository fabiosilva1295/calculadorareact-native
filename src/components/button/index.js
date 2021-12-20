import React from "react";
import {View, StyleSheet, Text, TouchableHighlight, Dimensions, TouchableOpacity, ProgressBarAndroidComponent} from "react-native";


const style = StyleSheet.create({
    Button: {
        width: Dimensions.get("window").width / 4 - 10, 
        height: Dimensions.get("window").width / 4 - 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        margin: 5,
        borderWidth: 1,
        borderColor: "#E6ECFC"
    },
    TextButton: {
        color: "#333",
        fontSize: 20
    }, 
    doubleButton: {
        width: Dimensions.get("window").width / 2
    }, 
    ac: {
        color: "#1f518c"
        
    },
    operationButton: {
        backgroundColor: "#F5FAFD"
    },
    operationText:{
        color: "#f27274",
        fontSize: 25,
        
    },
    especial:{
        color: "#1f518c"
    }
});

const Button = ( props ) => {
    stylesButton  = [style.Button];
    stylesText = [style.TextButton]
    if(props.ac){
        stylesText.push(style.ac);
    }
    if(props.operation){
        stylesText.push(style.operationText);
        stylesButton.push(style.operationButton);
    }
    if(props.especial){
        stylesText.push(style.especial);
    }


    return (
        <TouchableOpacity onPress={props.onClick} style={ stylesButton }>
            <Text style={stylesText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default Button;