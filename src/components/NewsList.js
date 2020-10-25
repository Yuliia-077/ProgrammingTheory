import React from 'react';
import NewsItem from './NewsItem'

class NewsList extends React.Component
{
    render()
    {
        return(
            <div>
            {this.props.News.map(news => (
                <NewsItem key = {news.id} news = {news} />
            ))}
            </div>
        )
    }
}
export default NewsList;