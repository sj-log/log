import Link from "next/link";
import ReactMarkdown from "react-markdown";
import {Fragment} from "react";

const BlogList = (props) => {

    const sortByDateAcs = (props) => {
        var allBlogs = props.allBlogs;
        allBlogs.sort((a, b) => {
            if (a.document.data.date > b.document.data.date) 
                return -1
            if (a.document.data.date < b.document.data.date) 
                return 1
            return 0
        })
    }

    const showPostsByCategory = (props, category) => {
        var category = category;
        return (
            <ul className="list">
                <h1 className="category-title">{category}</h1>
                {props.allBlogs.length > 1 && props
                    .allBlogs
                    .map((post, i) => {
                        {
                            if(post.document.data.category == category 
                            && post.document.data.status !== "draft") {
                                return (
                                    <Fragment key={i}>
                                        <Link
                                            key={post.slug}
                                            href={{
                                            pathname: `/blog/${post.slug}`
                                        }}>
                                            <a>
                                                <li>
                                                    <div className="blog__info">
                                                        <h2 className='post-title'>{post.document.data.title}</h2>
                                                    </div>
                                                </li>
                                            </a>
                                        </Link>
                                    </Fragment>
                                )
                            }
                        }
                    })
}
            </ul >
        )

    }

    return (
        <Fragment>
            {sortByDateAcs(props)}
            {showPostsByCategory(props, "Coding")}
            {showPostsByCategory(props, "Book")}
            {showPostsByCategory(props, "Essay")}
            {showPostsByCategory(props, "Marketing")}
        </Fragment >
    );
};

export default BlogList;