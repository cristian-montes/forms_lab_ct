import React from 'react';
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