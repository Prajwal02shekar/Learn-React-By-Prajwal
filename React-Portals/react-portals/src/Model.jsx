import ReactDOM from 'react-dom'
console.log(ReactDOM)

const Model = ({ toggle: { toggle, handleToggle },children}) => {
    return ReactDOM.createPortal(
        <>
            {children}
        </>,
        document.getElementById("model")
    )
}

export default Model
