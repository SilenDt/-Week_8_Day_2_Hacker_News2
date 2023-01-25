

const NewsListItem = ({story}) => {


    return (
        <li className="article">
            <h3>Title: {story.title}</h3>
            <h4>Author: {story.by}</h4>
            <h5>Article: {story.url}</h5>
        </li>

    )

}

export default NewsListItem