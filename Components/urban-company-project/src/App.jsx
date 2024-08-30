import { Component } from 'react'
import NavbarContainer from './components/navbar/NavbarContainer'
import SevicesContainer from './components/services/SevicesContainer'

class App extends Component {
    render() {
        return (
            <>
                <NavbarContainer />
                <SevicesContainer/>
            </>
        )
    }
}

export default App