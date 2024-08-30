import React from 'react'
import { AirtelContext } from './../../context/AirtelContext';

const Mohith = () => {
    return (
        <div>
            <h1>Mohith is using airtel network for data </h1>
            <AirtelContext.Consumer>
                {({ network_name, sim_type, price, data, duration, nearest_tower }) => {
                    return (
                        <>
                            <h1>Network {network_name}</h1>
                            <p>Price: &#8377;{price}</p>
                            <p>Sim Type: {sim_type}</p>
                            <p>Data: {data}</p>
                            <p>Validity :{duration} month</p>
                            <p>Nearest Tower: {nearest_tower}</p>
                        </>
                    )
                }

                }
            </AirtelContext.Consumer>

        </div>
    )
}

export default Mohith