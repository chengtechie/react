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

    // const editBook = () => {
    //
    // }
    //
    // const deleteBook = () => {
    //
    // }

    return (
        <div>
            <BookList books={books}/>
            <BookCreate onCreate={createBook}/>
        </div>
    );
}

export default App;
