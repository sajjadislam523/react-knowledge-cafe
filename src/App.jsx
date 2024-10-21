import Blogs from "./components/Blogs/Blogs";
import BookMark from "./components/BookMarks/BookMark";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <Header />
            <div className="md:flex">
                <Blogs />
                <BookMark />
            </div>
        </>
    );
}

export default App;
