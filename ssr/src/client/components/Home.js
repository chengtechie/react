
import React from 'react'
import {Helmet} from "react-helmet";


const Home = () => {

    // below syntax very important to input var!!!
    const getHeader = (name) => {
        return (
            // <div/>
            <Helmet>
                <title>{`${name}'s home`}</title>
                <meta property="og:title" content="Home App"/>
            </Helmet>
        )
    }

    return (
        <div>
            {getHeader('ChengChinLim')}
            Hi, my name is Cheng Chin Lim. My favorite basketball players are Kevin Garnett, Gordon Hayward, and Bam Adebayo.
            My favorite basketball skill of Kevin Garnett is his lock-down defense, which I need to learn from.
            {/*<button onClick={() => console.log('Hi')}>*/}
            {/*    Click here!*/}
            {/*</button>*/}
        </div>
    )
}

export {
    Home
}