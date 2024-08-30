// import React from 'react'

// const Count = ({count:{count,Increment}}) => {
// return (
// <div>
// {console.log("Iam a child component")}
// <h1>Iam a child component <strong style={{ color: "red" }}>{count}</strong></h1>
// <button onClick={Increment}>Increment from child</button>
// </div>
// )
// }

// export default Count;
// export const MemorizedComp=React.memo(Count)

//!-----------------------------------------------------
//! -new
import React from 'react'

const Count = ({name}) => {
	return (
		<div>
			{console.log("Check child component is re-rendering or not")}
			<h1>{ name}</h1>
		</div>
	)
}

export const MemorizrdComp=React.memo(Count)
