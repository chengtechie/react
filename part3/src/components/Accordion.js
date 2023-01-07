import {useState} from "react";
import {GoChevronLeft, GoChevronDown} from "react-icons/go";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1)
        } else {
            setExpandedIndex(index)
        }
    }

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex
        const icon = <span className={'text-2xl'}>
            {isExpanded ? <GoChevronDown />: <GoChevronLeft />}
        </span>
        // lambda calls lambda for refactor handleClick function
        // React does not print boolean
        return <div key={index}>
            <div className={'flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer'}
                 onClick={() => handleClick(index)}
            >{item.label} {icon}</div>
            {isExpanded && <div className={'border-b p-5'}>{item.content}</div>}
        </div>
    })
    return (
        <div className={'border-x border-t rounded'}>
            {renderedItems}
        </div>
    )
}

export default Accordion