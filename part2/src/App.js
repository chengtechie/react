import {useState} from "react";
import BookCreate from "./book/create/BookCreate";
import BookList from "./book/list/BookList";

function App() {
    const [books, setBooks] = useState([])

    const createBook = (title) => {
        console.log(`Creating ${title}`)
        setBooks([
            ...books, {id: Date.now(), title}
        ])
    }

    const editBookById = (details) => {
        const {id, title} = details
        setBooks(books.map(book => {
            if (book.id === id) {
                return {
                    ...book, title
                }
            }
            return book
        }))
    }


    const deleteBookById = (id) => {
        const updatedBooks = books.filter(book => book.id !== id)
        setBooks(updatedBooks)
    }

    return (
        <div className={'app'}>
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
