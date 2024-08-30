//? mounting phase methods
// 1.constructor()
//2.getDeriverdStateFromProps()
//3.render()
// 4.componentDidMount()


// import { Component } from 'react'

// export default class App extends Component {

//   constructor() {
//     super()
//     console.log("iam a constructor and iam render only once");
//     console.log("this is the best place for initialize the state object and bind this keyword");
//     this.state={
//       count:0,
//       course:"java",
//       users:""
//     }
//   }
//   static getDerivedStateFromProps(props, state) {
//     console.log("iam  getDerivedStateFromProps render after constructor and befor render and render again and again based on state and props ");
//     console.log("this method is rare case method");
//     // return {course:"js"}
//   }
//   componentDidMount() {
//     console.log("iam componentDidMount i will render only once execute after all montng life cycle methods");
//     console.log("this is the best place for calling network call or ajax calls and interact with dom ...and any");
//     window.fetch("https://api.github.com/users").then(x=>{
//       x.json().then(y=>this.setState({users:y,course:"python"}))
//     })
//   }
//   handleClick = () => {
//     console.log("click event has been triggered")
//     this.setState(prevState=>prevState+1)
//   }
//   render() {
//     console.log("iam render method and renders again and again....")

//     return (
//       <div>
//         <button onClick={this.handleClick}>click for changes  <strong>{this.state.count}</strong></button>
//         <h1>{this.state.course}</h1>
//       </div>
//     )
//   }
// }

//! ------------------------------------------------------------------------------------------------------------
//? update phase 
//1.getDerivedStateFromProps()
//2.shouldComponentUpdate()       -->must return boolean value
//3.getSnapShotBeforeUpdate()
//4.componentDidUpdate()
//5.render()


// import { Component } from 'react'

// export default class App extends Component {

//   constructor() {
//     super()
//     // console.log("iam a constructor and iam render only once");
//     // console.log("this is the best place for initialize the state object and bind this keyword");
//     this.state={
//       count:0,
//       course:"java",
//       users:""
//     }
//   }
//   // static getDerivedStateFromProps(props, state) {
//   //   console.log("iam  getDerivedStateFromProps render after constructor and befor render and render again and again based on state and props ");
//   //   console.log("this method is rare case method");
//   //   // return {course:"js"}
//   // }
//   // componentDidMount() {
//   //   console.log("iam componentDidMount i will render only once execute after all montng life cycle methods");
//   //   console.log("this is the best place for calling network call or ajax calls and interact with dom ...and any");
//   //   // window.fetch("https://api.github.com/users").then(x=>{
//   //   //   x.json().then(y=>this.setState({users:y,course:"python"}))
//   //   // })
//   // }
//   // handleClick = () => {
//   //   console.log("click event has been triggered")
//   //   // this.setState({count:this.state.count+1})
//   //   // let x=(this.state.count=this.state.count+1)
//   //   // console.log(x);
//   //   this.setState({course:"node js"})

//   // }

//   // shouldComponentUpdate(nextProp,nextState){
//   //   console.log("iam shouldComponentUpdate lets check it" );
//   //   let x=this.state.count!==nextState.count
//   //   console.log(x);
//   //   return x
//   // }
//   // getSnapshotBeforeUpdate(prevProps,prevState){
//   //   document.getElementById("demo").innerHTML=`Before the update ${prevState.course}`
//   // }
//   // componentDidUpdate(prevProps,prevState){
//   //   document.getElementById("demo1").innerHTML=`Updated value ${this.state.course}`
//   // }
//   componentDidMount(){
//     document.title=` I am ${this.state.users}I work for testyantra software company ${this.state.count}`
//   }
//   componentDidUpdate(){
//     document.title=` I am ${this.state.users}I work for testyantra software company ${this.state.count}`
//   }
//   handleClick = () => {
//     console.log("click event has been triggered")

//   }
//   render() {
//     console.log("iam render method and renders again and again....")

//     return (
//       <div>
//         <button onClick={this.handleClick}>click for changes  <strong>{this.state.count}</strong></button>
//         <h2>Current state value {this.state.count}</h2>
//         <h1>{this.state.count}</h1>
//         <aside id='demo'></aside>
//         <aside id='demo1'></aside>
//       </div>
//     )
//   }
// }

//! ===========================================================================

//? Unmounting phase
//1.componentWillUnmount()
//2.

import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    // console.log("iam a constructor and iam render only once");
    // console.log("this is the best place for initialize the state object and bind this keyword");
    this.state = {
      count: 0,
      course: "java",
      users: ""
    }
  }
  handleClick = () => {
    console.log("click event has been triggered")
    this.setState({ users: "shashi", count: this.state.count + 1 })

  }

  componentDidMount() {
    window.addEventListener("click", e => {
      console.log(e.target);
      console.log("added event");
    })
  }
  componentWillUnmount(){
    window.removeEventListener("click", e=>{
      console.log("removed event");
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click for changes  <strong>{this.state.count}</strong></button>
        <h2>Current state value {this.state.count}</h2>
        <h1>{this.state.course}</h1>
      </div>
    )
  }
}
