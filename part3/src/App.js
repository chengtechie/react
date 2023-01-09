// import ButtonPage from "./pages/ButtonPage";
// import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import {useState} from "react";

function App() {
    // const items = [
    //     {label: 'Can I use Javascript', content: 'It is good to use Javascript when you have time to do it'},
    //     {label: 'Can I use React', content: 'It is good to use React when you have time to do it'},
    //     {label: 'Can I use Node', content: 'It is good to use Node when you have time to do it'},
    // ]

    const [value, setValue] = useState(null)

    const handleSelect = (option) => {
        setValue(option)
    }

    const options = [
        {label: 'Red', value: 'red'},
        {label: 'Blue', value: 'blue'},
        {label: 'Green', value: 'green'},
    ]

    return (
        <div>
            {/*<ButtonPage />*/}
            {/*<Accordion items={items}/>*/}
            <Dropdown options={options} value={value} onChange={handleSelect}/>
        </div>
    )
}

export default App;
