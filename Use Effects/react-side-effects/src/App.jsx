import { useState } from 'react'
import ClassBasedComp from './components/ClassBasedComp'
import EffectHookExample from './hooks/EffectHookExample'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <ClassBasedComp/>
//         <hr />
//         <EffectHookExample/>
//       </div>
//     )
//   }
// }

// import React from 'react'

// const App = () => {
//   let [count, setCount] = useState(0)
//   return (
//     <div>
//      { count < 5 ? <ClassBasedComp />:null}
//       <hr />
//       {count < 5 && <EffectHookExample counter={{ count, setCount }} />}
//       <button onClick={()=>setCount(count+1)}>incrment</button>
//     </div>
//   )
// }

// export default App