import NewsListItem from "./NewsListItem"

const NewsList = ({news}) => {

const newsListItems = news.map((story, index) => {
    return <NewsListItem key={index} story={story} />
})

    return (
        <div>
            <ul >{newsListItems}</ul>
        </div>
    )
}

export default NewsList