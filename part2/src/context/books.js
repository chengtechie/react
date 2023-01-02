import {createContext, useState} from "react";

const BooksContext = createContext()

function Provider({children}) {

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

    return <BooksContext.Provider value={{
        books, createBook, editBookById, deleteBookById
    }}>
        {children}
    </BooksContext.Provider>
}

export { Provider }
export default BooksContext