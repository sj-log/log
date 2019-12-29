import Link from "next/link";
import {Fragment} from "react";

const BlogList = (props) => {

    const allBlogs = props.allBlogs

    const sortByDateAcs = (allBlogs) => {

        allBlogs.sort((a, b) => {
            if (a.fm.date > b.fm.date) 
                return -1
            if (a.fm.date < b.fm.date) 
                return 1
            return 0
        })
    }

    const showPostsByCategory = (props, wantToShowTheseCategory) => {

        return (

            <ul className="list">
                <h1 id={wantToShowTheseCategory} className="category-title lengthen2">{wantToShowTheseCategory}</h1>

                {props.allBlogs.length > 1 && props
                    .allBlogs
                    .map((post, i) => {

                        try {
                            var categoryFromAllBlogs = post.fm.category
                            var isThereThisCategoriedPost = categoryFromAllBlogs.includes(wantToShowTheseCategory)
                            var isDraft = ((post.fm.status !== undefined && post.fm.status.includes("draft"))
                                ? true
                                : false)
                        } catch (e) {
                            return null
                        }

                        // category show proc
                        {
                            if(isThereThisCategoriedPost && !isDraft) {
                                return (
                                    <li key={i}>
                                        <Link
                                            key={post.slug}
                                            href={{
                                            pathname: `/blog/${post.slug}`
                                        }}>
                                            <a>
                                                <h2 className='post-title translateX'>{post.fm.title}</h2>
                                            </a>
                                        </Link>
                                    </li>
                                )
                            }
                        }
                    })}
            </ul >
        )

    }

    return (
        <Fragment>
            {sortByDateAcs(allBlogs)}
            {showPostsByCategory(props, "Coding")}
            {showPostsByCategory(props, "Book")}
            {showPostsByCategory(props, "Marketing")}
        </Fragment >
    );
};

export default BlogList;