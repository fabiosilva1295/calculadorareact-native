import React  from "react";
import { View, Text, StyleSheet} from "react-native"



const Display = (props)=> {
    return (
        <View style={style.display}>
            <Text style={style.textValue} >{props.value}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    display: {
        flex: 1,
        position: "relative",
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    textValue: {
        position: "absolute",
        padding: 20,
        fontSize: 60,
        color: "#333"
    }
})

export default Display;