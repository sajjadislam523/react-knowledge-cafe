import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
    const [bookmarks, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleAddToBookmark = (blog) => {
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
    };

    const handleMarkAsRead = (time, id) => {
        // console.log(time);
        setReadingTime(readingTime + time);
        // Remove the read blog from bookmark
        const remainingBookmarks = bookmarks.filter(
            (bookmark) => bookmark.id !== id
        );
        setBookmarks(remainingBookmarks);
    };

    return (
        <>
            <Header />
            <div className="mx-auto md:flex max-w-7xl">
                <Blogs
                    handleMarkAsRead={handleMarkAsRead}
                    handleAddToBookmark={handleAddToBookmark}
                />
                <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
            </div>
        </>
    );
}

export default App;
