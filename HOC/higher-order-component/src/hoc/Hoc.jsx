// import React, { useState } from 'react'

// const Hoc = (WrappedComponent) => {
//    return function comp() {
//         return <WrappedComponent profile={{name:"Prajwal", age:23 ,company:"TYSS "}} />
//     }
// }

// export default Hoc

//? ================================================
import  React  from 'react';

const withFetch = (WrappedComponent) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                data: null,
                loading: true,
                error: null,
            }
        }
        async componentDidMount() {
            try {
                let res = await window.fetch("https://api.github.com/users")
                let finalData = await res.json()
                this.setState({ data: finalData, loading: false })
            }
            catch(error){
                this.setState({error:error,loading:false})
            }
        }
        render() {
            return (
                <>
                    <WrappedComponent data={this.state.data} loading={this.state.loading} error={this.state.error}/>
                </>
            )
        }
    }
}

export default withFetch
