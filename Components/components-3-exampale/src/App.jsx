import { Component } from "react";
import Navbar from "./components/navbar/navbar";

class App extends Component {
    render() {
        return (
            <>
                <article className="main">
                <Navbar/>
                </article>
            </>
        )
    }
}

export default App