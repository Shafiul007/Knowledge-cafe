import propTypes from 'prop-types';
const Blog = ({blog}) => {

    return (
        <div>
            <h2>blog title : {blog.id}</h2>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired
}
export default Blog;