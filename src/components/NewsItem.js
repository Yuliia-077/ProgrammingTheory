import React from 'react';

class NewsItem extends React.Component
{
    render()
    {
        return(
            <div className = "home">
                <h4 className="heading">{this.props.news.title}</h4>
                <article>{this.props.news.article}</article>
            </div>

        )
    }
}
export default NewsItem;