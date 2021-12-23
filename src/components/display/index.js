import React  from "react";
import { View, Text, StyleSheet} from "react-native"



const Display = (props)=> {
    return (
        <View style={style.display}>
            <Text style={style.textHistory} >{props.history}</Text>
            <Text style={style.textValue} >{props.value}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    display: {
        flex: 1,
        position: "relative",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexDirection: "column",
        padding: 20,
    },
    textValue: {
        fontSize: 60,
        color: "#333",
        marginTop: 20
    },
    textHistory: {
        fontSize: 20,
        color: "#a0a0a0",
    }
})

export default Display;