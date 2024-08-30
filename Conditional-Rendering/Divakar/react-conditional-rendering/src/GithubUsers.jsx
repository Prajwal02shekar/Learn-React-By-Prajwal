// import React, { useEffect, useState } from 'react'

// const GithubUsers = () => {
//     let [data,setData]=useState([])
//     let [loading,setLoading]=useState("");

//     let fetchData=async ()=>{
//         setLoading(true);
//         let response=await fetch("https://api.github.com/users");
//         let data=await response.json();
//         setData(data);
//         setLoading(false);
//     }
//     useEffect(()=>{
//         fetchData();
//     },[]);

//     if(loading){
//         return <h1>Loading...</h1>
//     }else{
//         return(
//             <div>
//                 {data.map(ele=>{
//                     return <h3>{ele.login}</h3>
//                 })}
//             </div>
//         )
//     }

// }

// export default GithubUsers
// -----------------------------------------------------------

import React, { useEffect, useState } from 'react'

const GithubUsers = () => {
    let [status, setStatus] = useState("loading")
    let [data, setData] = useState([])

    let fetchData = async () => {
        try {
            let response=await fetch("https://api.github.com/users");
            let data = await response.json();
            setData(data)
            setStatus("success")
        } catch (error) {
            setStatus("error")
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    switch (status) {
        case "loading":
            return <h1>Data is loading....</h1>
        case "success":
            return (
                <div>
                    {data.map((ele) => {
                        return <h3>{ele.login}</h3>
                    })}
                </div>
            )
        case "error":
            return <h1>Something went wrong</h1>
        default:
            return <h1>Something went wrong....</h1>
    }

}

export default GithubUsers