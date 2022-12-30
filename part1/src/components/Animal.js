
import '../css/Animal.css'
import bird from '../images/svg/bird.svg'
import cat from '../images/svg/cat.svg'
import dog from '../images/svg/dog.svg'
import gator from '../images/svg/gator.svg'
import horse from '../images/svg/horse.svg'
import heart from '../images/svg/heart.svg'
import {useState} from "react";

const svgMap = {
    bird, cat, dog, gator, horse, heart
}

function Animal({type}) {
    const [clicks, setClicks] = useState(0)
    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
        <div onClick={handleClick} className={"animal-show"}>
            <img className={"animal"}
                alt={"animal"} src={svgMap[type]}
            />
            <img className={"heart"}
                alt={"heart"} src={svgMap['heart']}
                style={{width: 10 + 10 * clicks}}
            />
        </div>
    )
}

export default Animal