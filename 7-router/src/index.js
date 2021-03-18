
import React from 'react'
import ReactDOM from "react-dom";
import App from "./App";

// if path matches, the components will render (might be > 1)
// for rendering deeply nested components without props

// react router uses .contains()!!!
// when '/2' is called
// '/' is valid in  '/2' (Wrong!!! 2 instead 1 components render)
// 'exact' attribute is used to make it ===

// if make components always visible, make it outside 'BrowserRouter' tag

// <Link> must be inside <BrowserRouter>

ReactDOM.render(<App />, document.querySelector('#root'))