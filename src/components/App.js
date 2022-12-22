// import ProfileCard from "./ProfileCard";
// import AlexaImage from '../images/alexa.png'
// import CortanaImage from '../images/cortana.png'
// import SiriImage from '../images/siri.png'
import {useState} from 'react'

// import 'bulma/css/bulma.css' // use css from npm package node modules

function App() {
    // Outside tag
    // {} prints string or number,
    // does not print boolean, object, undefined

    // Inside tag
    // {}, props (can be primitives, arrays, objects)
    // if true can don't need to declare
    // convert html attribute to jsx by wrapping primitive with {}

    // div class to className e.g. for CSS styling

    /* // super basic below
    let name = 'Cheng'
    let min = 3
    return (
        <div>
            <h1>Hi! My name is {name}</h1>
            <input type={"number"} min={min}/>
            <textarea autoFocus={true} maxLength={10}/>
        </div>
    )
     */ // super basic above

    /* // Learn Props below
    return (
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-4">
                        <ProfileCard
                            title={"Alexa"}
                            handle={"@alexa"}
                            image={AlexaImage}
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title={"Cortana"}
                            handle={"@cortana"}
                            image={CortanaImage}
                        />
                    </div>
                    <div className="column is-4">
                        <ProfileCard
                            title={"Siri"}
                            handle={"@siri"}
                            image={SiriImage}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
    */ // Learn Props above

    // Learn event system, do NOT include () because we need function reference only
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={handleClick}>Add Animal</button>
            <div>Number of animals: {count}</div>
        </div>
    )
}

export default App