import React, { Component } from 'react'
import { dbConnection } from './dbConnection';

export default class ClassBasedComp extends Component {
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    componentDidMount(){
        // document.title=`This title is comming from class ${this.state.count}`
        dbConnection.connect();
    }  //?render only once


    // componentDidUpdate(){
    //     document.title=`This title is comming from class with update phase ${this.state.count}`
    //     console.log("check re render or not");
    // } //?render based on states and props

    componentWillUnmount(){
        console.log("unmount")
        dbConnection.disConnect();
    }
  render() {
    // document.title=`Title is comming from  render method ${this.state.count}`
    return (
      <div>
        <h1>Classed Based component</h1>
        <h2>{this.state.count}</h2>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>

      </div>
    )
  }
}
