import BookCreate from "./book/create/BookCreate";
import BookList from "./book/list/BookList";

function App() {

    return (
        <div className={'app'}>
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
