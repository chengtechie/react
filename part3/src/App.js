import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

function App() {
    const items = [
        {label: 'Can I use Javascript', content: 'It is good to use Javascript when you have time to do it'},
        {label: 'Can I use React', content: 'It is good to use React when you have time to do it'},
        {label: 'Can I use Node', content: 'It is good to use Node when you have time to do it'},
    ]
    return (
        <div>
            <ButtonPage />
            <Accordion items={items}/>
        </div>
    )
}

export default App;
