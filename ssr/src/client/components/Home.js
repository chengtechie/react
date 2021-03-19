
import React from 'react'
import {Helmet} from "react-helmet/es/Helmet";

const Home = () => {

    // below syntax very important to input var!!!
    const getHeader = (name) => {
        return (
            <Helmet>
                <title>{`${name}'s home`}</title>
                <meta property="og:title" content="Home App"/>
            </Helmet>
        )
    }

    return (
        <div>
            {getHeader('Cheng')}
            Home Component changed!
            <button onClick={() => console.log('Hi')}>
                Click here!
            </button>
        </div>
    )
}

export {
    Home
}