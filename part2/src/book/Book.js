import {useState} from "react";
import BookEdit from "./edit/BookEdit";
import {useContext} from "react";
import BooksContext from "../context/books";

function Book({book}) {
    const [showEdit, setShowEdit] = useState(false)
    const {deleteBookById} = useContext(BooksContext)

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    const content = showEdit
        ? <BookEdit book={book} onSubmit={handleSubmit}/>
        : <h3>{book.title}</h3>

    return (
        <div className={'book-show'}>
            <img alt={'Random pic'} src={`https://picsum.photos/seed/${book.id}/200`}/>
            {content}
            <div className={'actions'}>
                <button className={'edit'} onClick={handleEditClick}>Edit</button>
                <button className={'delete'} onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default Book