import { useState,useMemo } from "react";
import React from 'react'

let factorial = n => {
	let i = 0;
	while (i < 10000)
		i++;
	if (n < 0) {
		return -1;
	} else if(n===0) {
		return 1
	} else {
		return n*factorial(n-1)
	}
}

const MemoExample = () => {

    //! syntax of useMemo()
	let [count, setCount] = useState(1);
    const [name, setName] = useState("")
    const result = useMemo(() => factorial(count), [count])

	// const result=factorial(count)
	return (
		<div>
			<h1>Memo Example</h1>
			<hr />
				<strong> Please check the {count} value along with factorial value {result}</strong>
				<br /> <br />
			<button onClick={()=>setCount(count+1)}>Increment</button> &nbsp;
				<button onClick={() => setCount(count - 1)}>Decrement</button>
				<hr />
					<input type="text" value={name} placeholder="Enter name" onChange={e => setName(e.target.value)} />
					<hr />
						{/* <DisplayName name={ name} /> */}
						<MemorizedName name={name}/>

		</div>
	)
}

export default MemoExample

	const DisplayName = ({name}) => {
		return (
            <>
                {console.log("Iam a child component please look at me once...")}
				<h1>{name}</h1>
			</>
		)

}

let MemorizedName = React.memo(DisplayName)
