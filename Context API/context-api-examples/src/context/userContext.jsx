import { createContext } from "react";
const UserContext = createContext("");
let { Provider } = UserContext



// ? Provider

const UserProvider = props => {
    return (
        <Provider value={{ name: "Prajwal", company: "TYSS", salary: 40000, gender: "male" }}>
         {props.children}
        </Provider>
    )
}

export default UserProvider