import PropTypes from "prop-types";

const BookMark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className="p-4 m-4 bg-white rounded-xl">
            <h3 className="text-base font-semibold font-exo2 ">{title}</h3>
        </div>
    );
};

BookMark.propTypes = {
    bookmark: PropTypes.object,
};

export default BookMark;
