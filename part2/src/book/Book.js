import {useState} from "react";
import BookEdit from "./edit/BookEdit";

function Book({book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (details) => {
        const {id, title} = details
        setShowEdit(false)
        onEdit({id, title})
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