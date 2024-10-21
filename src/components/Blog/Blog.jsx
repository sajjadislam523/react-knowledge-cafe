import PropTypes from "prop-types";

const Blog = ({ blog }) => {
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
        <div>
            <img src={cover} alt="" />
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
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold font-exo2"> {title}</h2>
            <p>
                {hashtags.map((hash, idx) => (
                    <span key={idx}>
                        <a href="/">#{hash}</a>
                    </span>
                ))}
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
};

export default Blog;
