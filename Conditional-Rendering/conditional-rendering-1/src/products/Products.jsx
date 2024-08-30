//? if and else 

// import React, { Fragment } from 'react'
// import { Item } from './Item';

// const Products = ({ state }) => {
//     if (!state) {
//         return <h1>Loading.......</h1>
//     }
//     if(!state.length){
//         return <p>Sorry, the product is empty</p>
//     }else{

//     return (
//         <ul>
//             {
//                 state.map(product => {
//                     return (
//                         <Fragment key={product.id}>
//                             <Item key={product.id} {...product}></Item>
//                         </Fragment>
//                     )
//                 })
//             }
//         </ul>
//     )
// }
// }

// export default Products


// --------------------------------------------------------------------

//? using ternary

import React, { Fragment } from 'react'
import { Item } from './Item';

const Products = ({ state }) => {
    return (
        <Fragment>
            {
                !state ? (
                    <h1>loading....</h1>
                ) : !state.length ? (
                    <p>Sorry, the product is Empty</p>
                ) : (
                    <ul>
                        {state.map(product => {
                            return (
                                <Fragment key={product.id}>
                                    <Item key={product.id}{ ...product } />
                            
                            </Fragment>
                            )
                        })}
                    </ul>
                )
            }
        </Fragment>
    )
}

export default Products