import {useState} from "react";

function BookEdit({book, onSubmit}) {
    const [title, setTitle] = useState(book.title)

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log(`Edit to ${title}`)
        onSubmit({id: book.id, title})
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