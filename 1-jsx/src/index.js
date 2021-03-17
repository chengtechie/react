// Import react libraries
import React from 'react'
import ReactDOM from 'react-dom'

// Create a react component
const App = () => {
    const buttonText = 'Click me' // use {} to reference JS variables

    // const getButtonText = () => { // use {} to reference JS functions
    //     return 'Click on me'
    // }

    // const buttonText = { text: 'Hi'} // {} cannot reference JS Objects!!!
    // {buttonText.text} is valid

    // 1-jsx: className, html: class
    // 1-jsx: htmlFor, html: for

    return (
        <div>
            <label className="label">
                Enter name:
            </label>
            <input type="text"/>
            <button>{buttonText}</button>
        </div>
    )
}

// Render the component
ReactDOM.render(
    <App />, document.querySelector('#root')
)