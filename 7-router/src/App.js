import {BrowserRouter, Route, Link} from "react-router-dom";
import Header from "./components/Header";

const PageOne = () => {
    return (
        <div>
            <Link to="/2">Go to page 2</Link>
        </div>
    )
}

const PageTwo = () => {
    return (
        <div>
            <Link to="/">Go to page 1</Link>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <div>
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact component={PageOne}/>
                        <Route path="/2" exact component={PageTwo}/>
                    </div>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App