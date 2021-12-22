

import React,  { Component } from 'react';
import { SafeAreaView, Text, View, StyleSheet, Dimensions } from "react-native";
import Display from "./components/display";
import Button from "./components/button"

export default class App extends Component {

  
  state = {
    displayValue: "0",
    displayHistory: "0",
    parentheses: "none"
  }

  initialState = {
    displayValue: "0",
    displayHistory: "0",
    parentheses: "none"
  }

  addDig  = dig => {
   
    if(this.state.displayValue.length < 9){
      if(this.state.displayValue.length < 2 && dig != "." && this.state.displayValue == "0"){
        this.setState({displayValue: this.state.displayValue = dig})
      }else {
        if(dig == "." && this.state.displayValue.includes(dig)){
          false
        }else {
          if(this.state.displayValue == 'error' || this.state.displayValue == 'Infinity'){
            this.setState({displayValue: this.state.displayValue = dig})
          }else{
            this.setState({displayValue: this.state.displayValue += dig})
          }
        }
      }
    }else{
      if(this.state.displayValue == 'error' || this.state.displayValue == 'Infinity'){
        this.setState({displayValue: this.state.displayValue = dig})
      }
    }
    
  }

  clearMemory = (dig) => {
    
    if(dig === "del" ){
      if(this.state.displayValue.length < 2 && this.state.displayValue === "0") {
        false
      }else if(this.state.displayValue.length < 2 && this.state.displayValue !== "0"){
        this.setState(this.initialState)
      }else{
        if(this.state.displayValue[this.state.displayValue.length - 1] == ")"){

          this.setState({
            displayValue: this.state.displayValue.slice(0, -1), 
            parentheses: "open"
          })
        }else {
          this.setState({displayValue: this.state.displayValue.slice(0, -1)})
        }
      }
    }else {
      this.setState(this.initialState)
    }
  }

  setOperation = digOperation => {
    let invalidStartString = ["*", "/", "(", "+", "-"]
    if(this.state.displayValue == 'error' || this.state.displayValue == 'Infinity'){
      return false
    }else{
      this.setState({displayValue: this.state.displayValue += digOperation})
    }
    
  }

  setParentheses = () => {

    if(!this.isValidOperation() && !this.state.displayValue.includes("(")){
      this.setState({

        displayValue: this.state.displayValue += "(",
        parentheses: "open"})
        
    } else if(!!this.isValidOperation && !this.state.displayValue.includes("(") && this.state.displayValue != "0"){

      this.setState({
        displayValue: this.state.displayValue += "*(",
        parentheses: "open"})

    }else if( this.state.parentheses === "open" && !this.isValidOperation()){
      this.setState({
        displayValue: this.state.displayValue += ")",
        parentheses: "close"
      })
    }
  }

  calculate = () => {
      let res = "0"
      if(this.state.displayValue === 'error' ){
        false
      }else{
        if(!!this.isValidOperation() ){
          res = eval(this.state.displayValue)
          if(isNaN(res)){
          this.setState({displayValue: "error"})
          }else{
            res += ""
            if(res.length > 9){
              let result = parseFloat(res)
              this.setState({displayValue : result.toFixed(5)})
            }else{
              this.setState({displayValue : res})
            }
          }
        }else{
          return false
        }
        

      } 
    
  }

  isValidOperation = () => {
    let invalidTermialString = ["*", "/", "(", "+", "-"]
    if(invalidTermialString.includes(this.state.displayValue[this.state.displayValue.length - 1])){
      return false
    }else {
      if(this.state.displayValue.includes("(") && !this.state.displayValue.includes(")")){
        return false
      }
      return true
    }
  }



  render(){
    return (
      <SafeAreaView style={style.app}> 
        <View style={style.display}>
          <Display value={this.state.displayValue}></Display>
        </View>
        <View style={style.buttoncontainer}>
          <Button onClick={() => this.clearMemory()} ac label="AC"></Button>
          <Button onClick={() => this.setParentheses("")} especial label="( ... )"></Button>
          <Button onClick={() => this.setOperation("")} especial label="%"></Button>
          <Button onClick={() => this.setOperation("/")} operation label="/"></Button>
          <Button onClick={() => this.addDig("7")} label="7"></Button>
          <Button onClick={() => this.addDig("8")} label="8"></Button>
          <Button onClick={() => this.addDig("9")} label="9"></Button>
          <Button onClick={() => this.setOperation("*")} operation label="x"></Button>
          <Button onClick={() => this.addDig("4")} label="4"></Button>
          <Button onClick={() => this.addDig("5")} label="5"></Button>
          <Button onClick={() => this.addDig("6")} label="6"></Button>
          <Button onClick={() => this.setOperation("-")} operation label="-"></Button>
          <Button onClick={() => this.addDig("1")} label="1"></Button>
          <Button onClick={() => this.addDig("2")} label="2"></Button>
          <Button onClick={() => this.addDig("3")} label="3"></Button>
          <Button onClick={() => this.setOperation("+")} operation label="+"></Button>
          <Button onClick={() => this.addDig("0")} label="0"></Button>
          <Button onClick={() => this.addDig(".")} label="."></Button>
          <Button onClick={() => this.clearMemory("del")} label="Del"></Button>
          <Button onClick={() => this.calculate()} operation label="="></Button>
        </View>
      </SafeAreaView>
    )
  }
}

const style = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  buttoncontainer: {
    display: "flex",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  display:{
    flex: 1,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff"
  }
})