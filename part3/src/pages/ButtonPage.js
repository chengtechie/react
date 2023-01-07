import {GoBell, GoCloudDownload, GoDatabase} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!')
    }

    return (
        <div>
            {/*<p className='underline'>Test Tailwind</p>*/}
            <div>
                <Button success rounded outline onClick={handleClick}><GoCloudDownload/>Hi!</Button>
            </div>
            <div>
                <Button danger outline className={'mb-5'}><GoBell/>Watch Out!</Button>
            </div>
            <div>
                <Button rounded primary><GoDatabase/>Nice!</Button>
            </div>
            <div>
                <Button warning>Be Careful!</Button>
            </div>
            <div>
                <Button secondary>Nice!</Button>
            </div>
        </div>
    );
}

export default ButtonPage;
