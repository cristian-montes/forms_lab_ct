import React, { Component} from 'react';
import ArticleList from '../components/app/articles/ArticleList';
import { fetchArticles } from '../services/NewsAPI';



export default class NewsContainer extends Component {
    state= {
        loading: true,
        articles:[]
    }

    async componentDidMount(){
        const articles = await fetchArticles();
        this.setState({articles: articles})
    }

    render(){

        return <ArticleList/>
    }
}