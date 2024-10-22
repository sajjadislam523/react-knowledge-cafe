import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const {
        title,
        cover,
        author_img,
        author,
        posted_date,
        reading_time,
        hashtags,
    } = blog;
    return (
        <div className="mb-20 space-y-6">
            <img className="w-full" src={cover} alt="" />
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img className="w-16 h-16" src={author_img} alt="" />
                    <div>
                        <p className="text-2xl font-bold font-exo2">{author}</p>
                        <p className="font-exo2 text-[#11111199] font-semibold">
                            {posted_date}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}>
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl font-bold font-exo2"> {title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="/">#{hash} </a>
                    </span>
                ))}
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time)}
                className="text-purple-400 underline transition duration-200 ease-out hover:text-purple-500"
            >
                Mark as read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
};

export default Blog;
