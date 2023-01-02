import Book from "../Book";
import {useContext} from "react";
import BooksContext from "../../context/books";

function BookList() {
    const {books} = useContext(BooksContext)
    const renderedBooks = books.map(book => {
        return <Book key={book.id} book={book} />
    })
    return (
        <div className={'book-list'}>
            {renderedBooks}
        </div>
    )
}

export default BookList