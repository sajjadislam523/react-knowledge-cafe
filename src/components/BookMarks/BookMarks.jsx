import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookmarks, readingTime }) => {
    return (
        <>
            <div className="flex flex-col h-full mt-4 md:ml-4 md:w-1/3">
                <div className="p-4 m-4 bg-[#6047EC1A] border border-[#6047EC] rounded-xl ">
                    <h4 className="text-xl text-[#6047EC] font-bold text-center font-exo2">
                        Reading Time: {readingTime} min
                    </h4>
                </div>

                <div className="flex flex-col flex-1 mt-2 rounded-lg bg-slate-100">
                    <h1 className="p-4 text-xl font-bold text-center font-exo2">
                        Bookmarked Blogs: {bookmarks.length}
                    </h1>
                    <div className="h-full overflow-auto">
                        {bookmarks.map((bookmark, idx) => (
                            <BookMark key={idx} bookmark={bookmark} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
};

export default BookMarks;
