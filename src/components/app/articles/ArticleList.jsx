import React from 'react';
import PropTypes from 'prop-types'
import Article from './Article';


export default function ArticleList( { articles }){
    const articleList = articles.map(({title, author, description,urlToImage})=> (
        <li key={`${title}-${author}`}> 
            <Article
                title={title}
                author= {author}
                description={description}
                image={urlToImage}
            />
        </li>
    ));
    return (
        <div>
            <ul aria-label='articles'>{articleList}</ul>
        </div>
    )

}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            urlToImage: PropTypes.string.isRequired,
        })
    )
}