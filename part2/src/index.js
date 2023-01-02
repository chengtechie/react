
import './index.css'
import React from 'react'
import ReactDom from 'react-dom/client'
import App from "./App";
import {Provider} from "./context/books";

const el = document.getElementById('root')

// Tell React to take control of the root element
const root = ReactDom.createRoot(el)

root.render(<div>
    <Provider>
        <App />
    </Provider>
</div>)



