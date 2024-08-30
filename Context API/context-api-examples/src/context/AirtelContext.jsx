import { createContext } from "react";
import React from 'react'


export const AirtelContext = createContext("")
let { Provider } = AirtelContext

const AirtelProvider = ({ children }) => {
    return (
        <Provider value={{ network_name: 'Airtel', sim_type: "micro", price: 500, data: 4, duration: 1, nearest_tower: "bangalore" }}>
            {children}
        </Provider>
    )
}

export default AirtelProvider