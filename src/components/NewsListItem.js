

const NewsListItem = ({story}) => {


    return (
        <li className="article">
            <h3 className="title">Title: {story.title}</h3>
            <h4 className="author">Author: {story.by}</h4>
            <h5 className="article-url">Article: {story.url}</h5>
        </li>

    )

}

export default NewsListItem