import React from 'react';
import PropTypes from 'prop-types'

export default function Article({title, author, description, image}){
    return (
        <figure>
            <img src={image} alt={author} height={200} width={200} />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p> Author: {author}</p>
            </div>
        </figure>
    )
}

Article.prototype = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}