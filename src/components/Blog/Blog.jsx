import PropTypes from "prop-types";

const Blog = ({ blog }) => {
    return (
        <div>
            <h1>Single Blogs {blog}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
};

export default Blog;
