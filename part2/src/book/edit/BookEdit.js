import {useState} from "react";
import {useContext} from "react";
import BooksContext from "../../context/books";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)
    const {editBookById} = useContext(BooksContext)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(`Edit to ${title}`)
        editBookById({id: book.id, title})
        onSubmit()
    }

    return (
        <div>
            <form className={'book-edit'} onSubmit={handleSubmit}>
                <label>Title</label>
                <input value={title} onChange={handleChange} className={'input'}/>
                <button className={'button is-primary'}>Save</button>
            </form>
        </div>
    )
}

export default BookEdit