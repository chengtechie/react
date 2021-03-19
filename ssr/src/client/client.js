
// Startup point for client side app
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import Routes from './Routes'

// set up and bind all event handlers in browser
ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.querySelector('#root'))

