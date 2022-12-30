import {useState} from "react";

function SearchBar({onSubmit}) {
    const [term, setTerm] = useState('')

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onSubmit(term)
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
                {term.length < 3 && 'Min 3 characters on search term'}
            </form>
        </div>
    )
}

export default SearchBar