import { useState, Fragment } from 'react';
import AVENGERS from '../../avengers.json'

const Avengers = () => {
    let [state, setState] = useState(AVENGERS)  
    return (
        <div className='users'>
            <h1>Avangers</h1>

            {
                state.map.length > 0 && state.map(avg => (
                    <Fragment key={avg.show.id}>
                        <div className="container">
                            <figure>
                                <picture>
                                    <img src={avg?.show?.image?.original} alt={avg?.show?.name} height={150} width={150} />
                                </picture>
                            </figure>
                        </div>
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Avengers