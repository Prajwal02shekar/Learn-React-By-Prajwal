// import PropTypes, { element } from 'prop-types';
// console.log(PropTypes, "prop type EXAPLE");     //returns object
// const Child = props => {
//     // console.log(props.name); 
//     return (
//         <div>{props.username}</div>
//     )
// }

// export default Child
// Child.propTypes = {
//     username: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.bool,
//         PropTypes.number,
//         PropTypes.object,
//     ]),
//     name: PropTypes.oneOf(["shashi", "kunal", true]),
//     arr: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string,
//     PropTypes.bool,PropTypes.object
//     ])),
//     lang:PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
//     obj:PropTypes.shape({
//         id:PropTypes.number,
//         name:PropTypes.string,
//         salary:PropTypes.number,
//         isHire:PropTypes.bool
//     })
//     // company:PropTypes.string,
//     // salary:PropTypes.number,
//     // details:PropTypes.object,
//     // languages:PropTypes.array,
//     // fnc:PropTypes.func,
//     // isHired:PropTypes.bool,
//     // isSymbol:PropTypes.symbol,
//     // nodeProp:PropTypes.node,
//     // // children:PropTypes.elementType.isRequired,     //used to restrict one child
//     // children:PropTypes.element.isRequired,
//     // username:PropTypes.string.isRequired

// }
import React from 'react'
import { PropTypes } from 'prop-types';
import { string } from 'prop-types';
const Child = (props) => {
  return (
    <div>
        <h1>{props.username}</h1>
        <p>{props.salary}</p>
        <p>
            {
                props.isAvailable ?"yes iam available" :"no iam not available"
            }
        </p>

    </div>
  )
}


export default Child

Child.propTypes={
    username:PropTypes.string,
    salary:PropTypes.number,
    isAvailable:PropTypes.bool

}




























































