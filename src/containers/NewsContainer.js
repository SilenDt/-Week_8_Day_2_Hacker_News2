import React, { useState, useEffect } from "react"
import NewsList from "../components/NewsList"

const NewsContainer = () => {

    const [news, setNews] = useState([])
    const [input, setInput] = useState("")

    useEffect(() => {
        fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then((res) => res.json())
                .then((data) => data.slice(0,20))
                    .then((filteredData) => handleStories(filteredData))

    }, [])

    const handleStories = (newsStories) => {
        const storyPromises = newsStories.map((story) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${story}.json`)
                .then(((res) => res.json()))
        })
        Promise.all(storyPromises)
            .then((stories) => setNews(stories)
    )}

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const filteredNews = news.filter(story => story.title.includes(input))
        setNews(filteredNews)
        }
    

    return (
        <div className="container">
            <section className="head">
                <div className="header">
                    <h1>*Hacker News Filter*</h1>
                </div>
                <div className="form">
                    <form onSubmit={handleSubmit}>
                        <p>Search Articles Here:</p>
                        <input type="text" onChange={handleInput} value={input}></input>
                        <input type="submit"></input>
                    </form>
                </div>
            </section>
            
            <section className="article-box">
                <article>
                    <NewsList news={news}/>
                </article>
            </section>
        </div>
    )
}

export default NewsContainer