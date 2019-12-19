import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogList = (props) => {

  const sortByDateAcs =(props) =>{
    var allBlogs = props.allBlogs;
    allBlogs.sort((a,b)=>{
      if(a.document.data.date > b.document.data.date) return -1
      if(a.document.data.date < b.document.data.date) return 1
      return 0
    })

  }

  function truncateSummary(content) {
    return content.slice(0, 200).trimEnd();
  }

  function reformatDate(fullDate) {
    const date = new Date(fullDate)
    return date.toDateString().slice(4);
  }

  return (
    <>
      {sortByDateAcs(props) }
      <ul className="list">
        {props.allBlogs.length > 1 && props.allBlogs.map(post => (
          <Link
            key={post.slug}
            href={{ pathname: `/blog/${post.slug}` }}
          >
            <a>
            <li>
              <div className="blog__info">
                <h2 className='post-title'>{post.document.data.title}</h2>
              </div>
            </li>
            </a>
          </Link>
        ))}
      </ul>
   
    </>
  );
};

export default BlogList;
