// import React from 'react'
// import Counter from './components/Counter'
// import CounterProvider from './context/CounterContext'

// const App = () => {
//   return (
//     <section id="mainContainer">
//         <article>
//             <CounterProvider>
//                 <Counter/>           {/*counter is the child of counter provider*/}
//             </CounterProvider>
//         </article>
//     </section>
//   )
// }

// export default App


//? Theme Context

import React from 'react'
import Container from './components/Container';
import { ThemeContext, theme } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <Container/>
    </ThemeContext.Provider>
  )
}

export default App