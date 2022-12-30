import Book from "../Book";

function BookList({books, onDelete}) {
    const renderedBooks = books.map(book => {
        return <Book key={book.id} book={book} onDelete={onDelete}/>
    })
    return (
        <div className={'book-list'}>
            {renderedBooks}
        </div>
    )
}

export default BookList