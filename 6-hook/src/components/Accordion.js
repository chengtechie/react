
import React, { useState } from 'react'

// for a helper function (onTitleClicked) to work
// MUST wrap inside an arrow function!!!

// if [] on the left side, its array destructuring

// in useState(param), param is the initial state
// initial state is always assigned to the 1st element of the array
// setter function is always the 2nd element of the array

// one useState -> one attribute

// every time setter function called, component rerender


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const onTitleClicked = (index) => setActiveIndex(index)
    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active': ''
        return (
            <div key={item.title}>
                <div
                    className={`${active} title`}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"/>
                        {item.title}
                </div>
                <div className={`${active} content`}>
                    <p>{item.content}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    )
}

export default Accordion