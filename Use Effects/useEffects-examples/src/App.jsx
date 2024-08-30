// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [width,setWidth]=useState(window.innerWidth)
//   const UpdateWidth=()=>{
//     setWidth(window.innerWidth)
//   }
//   useEffect(()=>{
//     window.addEventListener('resize',UpdateWidth)
//     return ()=>{
//       //? remove event listener
//       //? clean up function
//       window.removeEventListener('resize',UpdateWidth)
//     }
//   },[width])
//   console.log(width);

//   useEffect(()=>{
//     if(width>600){
//       window.document.body.style.background="green"
//     }
//     else{
//       window.document.body.style.background="red"
//     }
//   },[width])
//   return (
//     <div>App</div>
//   )
// }

// export default App

//!------------------------------------------------------------------------------------------------

import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'

const App = () => {
  let [products, setProducts] = useState(null)
  // let fetchProduct = async () => {
  //   let data = await window.fetch("https://api.escuelajs.co/api/v1/products")
  //   let finalProduct = await data.json()
  //   setProducts(finalProduct)
  // }

  let fetchProduct = async () => {
      let {data} = await axios.get("https://fakestoreapi.com/products")
      setProducts(data)
    }
  useEffect(() => {
    fetchProduct()
  })
  return (
    <aside className='flexContainer'>
      {products === null ? "loading..." : products.map(product =>
        <div className='container' key={product.id}>
          <img src={product.image} alt={product.title} height={200} width={200} />
          <h2>{product.title}</h2>
        </div>)}

    </aside>
  )
}

export default App